// script.js

// === Scroll Reveal ===
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});

// === Dark Mode Toggle ===
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.id = "toggle-theme";
toggleThemeBtn.textContent = "🌙 / ☀️";
toggleThemeBtn.style.position = "fixed";
toggleThemeBtn.style.bottom = "20px";
toggleThemeBtn.style.right = "20px";
toggleThemeBtn.style.padding = "10px";
toggleThemeBtn.style.borderRadius = "50%";
toggleThemeBtn.style.border = "none";
toggleThemeBtn.style.cursor = "pointer";
toggleThemeBtn.style.zIndex = "2000";
document.body.appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// === Feedback Form Interativo ===
const form = document.querySelector(".feedback__form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Obrigado pelo seu feedback! 🚀");
        form.reset();
    });
}

// === Header Shrink ===
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
