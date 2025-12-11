const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.isIntersecting && entry.target.classList.add("show")
    })
  },
  { threshold: 0.15 }
)

document
  .querySelectorAll(
    ".section, .hero-section, .project-card, .project-section"
  )
  .forEach(el => {
    el.classList.add("hidden")
    observer.observe(el)
  })

const yearSpan = document.getElementById("year")
yearSpan && (yearSpan.textContent = new Date().getFullYear())
function equalizeProjectCardHeights() {
  const cards = Array.from(document.querySelectorAll('.project-card'));
  if (!cards.length) return;
  cards.forEach(c => c.style.height = 'auto'); // reset
  const max = Math.max(...cards.map(c => c.scrollHeight));
  cards.forEach(c => c.style.height = max + 'px');
}
window.addEventListener('load', equalizeProjectCardHeights);
window.addEventListener('resize', () => setTimeout(equalizeProjectCardHeights, 120));
