/* Scroll reveal animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section, .project-card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* Subtle project hover accent */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "#2563eb";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "var(--border)";
  });
});
