const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile menu
if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
document.querySelectorAll("#nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });
});


// ===============================
// OWNER / VISITOR ACCESS
// ===============================

// CHANGE THIS PASSWORD
const OWNER_PASSWORD = "SMJobs2026";

const uploadSection = document.getElementById("uploadSection");
const editSection = document.getElementById("editSection");
const ownerLogin = document.getElementById("ownerLogin");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const passwordInput = document.getElementById("ownerPassword");
const loginMessage = document.getElementById("loginMessage");


// Visitor mode by default
function setVisitorMode() {
    if (uploadSection) {
        uploadSection.style.display = "none";
    }

    if (editSection) {
        editSection.style.display = "none";
    }

    if (ownerLogin) {
        ownerLogin.style.display = "block";
    }

    if (logoutBtn) {
        logoutBtn.style.display = "none";
    }
}


// Owner mode
function setOwnerMode() {
    if (uploadSection) {
        uploadSection.style.display = "block";
    }

    if (editSection) {
        editSection.style.display = "block";
    }

    if (ownerLogin) {
        ownerLogin.style.display = "none";
    }

    if (logoutBtn) {
        logoutBtn.style.display = "block";
    }
}


// Login
if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        const password = passwordInput.value;

        if (password === OWNER_PASSWORD) {

            sessionStorage.setItem("ownerMode", "true");

            setOwnerMode();

            if (loginMessage) {
                loginMessage.textContent = "Owner mode enabled.";
            }

        } else {

            if (loginMessage) {
                loginMessage.textContent = "Incorrect password.";
            }

        }
    });
}


// Logout
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {

        sessionStorage.removeItem("ownerMode");

        setVisitorMode();

        if (passwordInput) {
            passwordInput.value = "";
        }

        if (loginMessage) {
            loginMessage.textContent = "";
        }
    });
}


// Check current session
if (sessionStorage.getItem("ownerMode") === "true") {
    setOwnerMode();
} else {
    setVisitorMode();
}
