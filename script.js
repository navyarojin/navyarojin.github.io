// Scroll reveal for sections and project cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll(".section, .hero-section, .project-card, .project-section")
  .forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
