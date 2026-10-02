export function initScrollObserver() {
  if (typeof IntersectionObserver === 'undefined') return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        // Check if element contains metrics to count up
        const metricValEl = entry.target.querySelector('.metric-value');
        if (metricValEl && !metricValEl.hasAttribute('data-counted')) {
          animateCounter(metricValEl);
        }

        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function attachObservers() {
    // Automatically find sections, grids, cards, and headers
    const elementsToReveal = document.querySelectorAll(
      '.section-header, .projects-grid, .metrics-grid, .process-tabs, .testimonials-wrapper, .case-study-hero-img, .case-study-narrative, .contact-grid, .about-page section, .services-page section'
    );

    elementsToReveal.forEach(el => {
      if (!el.classList.contains('scroll-reveal') && !el.classList.contains('stagger-cascade')) {
        el.classList.add(el.children.length > 2 ? 'stagger-cascade' : 'scroll-reveal');
      }
      observer.observe(el);
    });
  }

  function animateCounter(el) {
    el.setAttribute('data-counted', 'true');
    const text = el.textContent.trim();
    const match = text.match(/^(\d+)(.*)$/);
    if (!match) return;

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const duration = 1400;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(eased * targetNum);
      el.textContent = `${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = text;
      }
    }

    requestAnimationFrame(update);
  }

  // Initial attach
  attachObservers();

  // Re-attach on hashchange or dynamic route renders
  window.addEventListener('hashchange', () => {
    setTimeout(attachObservers, 150);
  });

  return {
    refresh: attachObservers
  };
}
