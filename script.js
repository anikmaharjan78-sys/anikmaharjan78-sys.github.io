// small utilities: fade-in reveal + footer years + scroll spy for active nav links
document.addEventListener('DOMContentLoaded', function () {
  // set year in footers
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  // Reveal on scroll (Intersection Observer)
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(()=> entry.target.classList.add('active'), delay);
        // optionally unobserve so it only happens once:
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.18});

  reveals.forEach(el => obs.observe(el));

  // Simple scroll-spy (highlights nav link for current page)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(a => {
    if (a.href === location.href || (a.href === location.origin + location.pathname)) {
      a.classList.add('active');
    }
  });
});
