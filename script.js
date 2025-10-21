// Dark mode toggle
const btn = document.getElementById("themeToggle");
const html = document.documentElement;

btn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-bs-theme", newTheme);
  btn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Fade-in animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section-fade").forEach(section => {
  observer.observe(section);
});
