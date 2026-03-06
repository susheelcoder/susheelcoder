document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = e.target;
    let submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;   // 🚫 Disable button

    let data = new FormData(form);

    // ✅ Auto Increment ID
    if (!localStorage.getItem("formCounter")) {
        localStorage.setItem("formCounter", 0);
    }

    let count = parseInt(localStorage.getItem("formCounter")) + 1;
    localStorage.setItem("formCounter", count);

    let autoID = "#" + count;
    data.set("ID", autoID);

    // Date & Time
    let now = new Date();
    data.set("Date", now.toLocaleDateString());
    data.set("Time", now.toLocaleTimeString());

    fetch("https://sheetdb.io/api/v1/rz6thjkjd5949", {
        method: "POST",
        body: data
    })
        .then(res => res.json())
        .then(() => {
            alert("✅ Form Submitted Successfully!\n📞 +91 9122704118");


            // ✅ Open WhatsApp

            // setTimeout(() => {
            //     window.location.href = "https://wa.me/919122704118";
            // }, 1500);


            form.reset();
            submitBtn.disabled = false; // ✅ Enable again after success
        })
        .catch(err => {
            alert("❌ Error submitting form");
            console.log(err);
            submitBtn.disabled = false; // 🔁 Enable if error
        });
});