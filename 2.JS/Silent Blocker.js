 // Complete Silent Protection System
let protectionActive = true;
let attempts = 0;

// Function to update UI status
function updateStatus() {
    const statusText = document.getElementById('statusText');
    const toggleBtn = document.getElementById('toggleBtn');
    
    if (protectionActive) {
        statusText.textContent = "ALL PROTECTIONS ACTIVE";
        statusText.style.color = "#4CAF50";
        toggleBtn.textContent = "Disable All Protection";
        toggleBtn.style.background = "linear-gradient(45deg, #4CAF50, #45a049)";
    } else {
        statusText.textContent = "ALL PROTECTIONS DISABLED";
        statusText.style.color = "#FF5722";
        toggleBtn.textContent = "Enable All Protection";
        toggleBtn.style.background = "linear-gradient(45deg, #FF416C, #FF4B2B)";
    }
}

// Function to toggle protection
function toggleProtection() {
    protectionActive = !protectionActive;
    updateStatus();
}

// Function to refresh page
function refreshPage() {
    location.reload();
}

// ================= MAIN BLOCKING FUNCTIONS =================

// 1. BLOCK RIGHT CLICK (Context Menu)
document.addEventListener('contextmenu', function(e) {
    if (protectionActive) {
        e.preventDefault();
        attempts++;
        return false;
    }
});

// 2. BLOCK F12 AND DEVELOPER TOOLS
document.addEventListener('keydown', function(e) {
    if (!protectionActive) return;
    
    // Block F12
    if (e.key === 'F12') {
        e.preventDefault();
        attempts++;
        return false;
    }
    
    // Block Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        attempts++;
        return false;
    }
    
    // Block Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        attempts++;
        return false;
    }
    
    // Block Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        attempts++;
        return false;
    }
    
    // Block Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        attempts++;
        return false;
    }
    
    // Block Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        attempts++;
        return false;
    }
    
    // Block Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        attempts++;
        return false;
    }
});

// 3. BLOCK COPY (Ctrl+C)
document.addEventListener('keydown', function(e) {
    if (protectionActive) {
        // Block Ctrl+C
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            e.preventDefault();
            attempts++;
            return false;
        }
        
        // Block Ctrl+A (Select All)
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            e.preventDefault();
            attempts++;
            return false;
        }
        
        // Block Ctrl+X (Cut)
        if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
            e.preventDefault();
            attempts++;
            return false;
        }
    }
});

// 4. BLOCK TEXT SELECTION (Optional)
document.addEventListener('selectstart', function(e) {
    if (protectionActive) {
        e.preventDefault();
        return false;
    }
});

// 5. BLOCK DRAG AND DROP
document.addEventListener('dragstart', function(e) {
    if (protectionActive) {
        e.preventDefault();
        return false;
    }
});

// 6. BLOCK PRINT SCREEN KEY
document.addEventListener('keydown', function(e) {
    if (protectionActive) {
        // Block Print Screen
        if (e.key === 'PrintScreen') {
            e.preventDefault();
            attempts++;
            return false;
        }
    }
});

// 7. DETECT AND BLOCK DEVTOOLS OPENING
(function() {
    if (!protectionActive) return;
    
    // Method 1: Detect devtools by checking console
    const checkDevTools = function() {
        const threshold = 160; // Width difference when devtools is open
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            // DevTools detected - try to close it
            attempts++;
            window.close(); // Try to close window
            document.body.innerHTML = ''; // Clear page
            window.location.href = 'about:blank'; // Redirect to blank page
        }
    };
    
    // Check periodically
    setInterval(checkDevTools, 1000);
    
    // Method 2: Override console functions
    if (typeof console !== 'undefined') {
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
        console.info = function() {};
        console.debug = function() {};
    }
})();

// 8. PREVENT INSPECT ELEMENT MENU
document.addEventListener('keydown', function(e) {
    if (protectionActive) {
        // Block right-click menu key
        if (e.key === 'ContextMenu') {
            e.preventDefault();
            attempts++;
            return false;
        }
    }
});

// 9. BLOCK BACK/FORWARD BROWSER BUTTONS
window.history.pushState(null, null, window.location.href);
window.addEventListener('popstate', function() {
    if (protectionActive) {
        window.history.pushState(null, null, window.location.href);
    }
});

// 10. BLOCK PAGE RELOAD SHORTCUTS
document.addEventListener('keydown', function(e) {
    if (protectionActive) {
        // Block Ctrl+R and F5
        if ((e.ctrlKey && e.key === 'r') || e.key === 'F5') {
            e.preventDefault();
            attempts++;
            return false;
        }
        
        // Block Ctrl+F5 (Hard Reload)
        if (e.ctrlKey && e.key === 'F5') {
            e.preventDefault();
            attempts++;
            return false;
        }
    }
});

// Initialize
updateStatus();

// Log attempts (for debugging only - can be removed)
setInterval(() => {
    if (attempts > 0 && protectionActive) {
        console.log(`Silent blocks: ${attempts}`);
    }
}, 5000);