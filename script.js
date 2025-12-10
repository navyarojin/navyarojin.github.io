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
