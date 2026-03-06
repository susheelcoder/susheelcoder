    const cvFile = "1.IMG/a.jpg"; // PDF path

    function openCV() {
        document.getElementById("cvFrame").src = cvFile;
        document.getElementById("cvModal").style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeCV() {
        document.getElementById("cvModal").style.display = "none";
        document.getElementById("cvFrame").src = "";
        document.body.style.overflow = "auto";
    }

    window.onclick = e => {
        if (e.target.id === "cvModal") closeCV();
    };