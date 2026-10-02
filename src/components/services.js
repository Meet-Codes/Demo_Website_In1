import { studioData } from '../data/studio.js';

export function createServices() {
  const section = document.createElement('div');
  section.className = 'services-page';

  section.innerHTML = `
    <!-- Services Hero -->
    <div class="case-study-hero">
      <div class="container">
        <span class="eyebrow">Services & Architectural Process</span>
        <h1 class="display-title" style="margin-bottom: var(--space-md);">Precision from Concept to Handover</h1>
        <p class="lead" style="max-width: 820px;">
          Our practice provides end-to-end architectural and interior design services, steering complex visions through meticulous planning, artisanal fabrication, and turnkey delivery.
        </p>
      </div>
    </div>

    <!-- 4-Stage Process Section -->
    <section class="section-padding" style="background-color: var(--color-bg-elevated); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow">Methodology</span>
          <h2 class="section-title">The Four-Stage Design Lifecycle</h2>
          <p style="margin-top: 8px;">Explore each phase to understand how your project advances from initial site audit to white-glove handover.</p>
        </div>

        <div class="process-tabs" id="process-tabs">
          ${studioData.process.map((step, idx) => `
            <button class="process-tab-btn ${idx === 0 ? 'active' : ''}" data-step="${idx}">
              <span class="process-tab-num">Stage ${step.step}</span>
              <strong class="process-tab-title">${step.title}</strong>
            </button>
          `).join('')}
        </div>

        <div class="process-details-card" id="process-details-card">
          <!-- Populated by script -->
        </div>
      </div>
    </section>

    <!-- Services Offerings Breakdown -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow">Our Practices</span>
          <h2 class="section-title">Comprehensive Spatial Capabilities</h2>
        </div>

        <div class="projects-grid">
          ${studioData.services.map(svc => `
            <div class="project-card" style="cursor: default; padding: 32px;">
              <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-accent); margin-bottom: 8px;">${svc.title}</h3>
              <p style="font-family: var(--font-display); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-main); margin-bottom: 16px;">${svc.subtitle}</p>
              <p style="margin-bottom: 24px;">${svc.description}</p>
              
              <ul class="process-deliverables-list" style="margin-top: auto;">
                ${svc.features.map(feat => `
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>${feat}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Interactive FAQ Accordion -->
    <section class="section-padding" style="background-color: var(--color-surface-subtle); border-top: 1px solid var(--color-border);">
      <div class="container-narrow">
        <div class="section-header text-center" style="text-align: center;">
          <span class="eyebrow">Clarity</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>

        <div class="faq-accordion" id="faq-accordion">
          ${studioData.faqs.map((faq, i) => `
            <div class="accordion-item ${i === 0 ? 'active' : ''}">
              <button class="accordion-trigger" aria-expanded="${i === 0 ? 'true' : 'false'}">
                <span>${faq.question}</span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-content" style="${i === 0 ? 'max-height: 250px;' : ''}">
                <div class="accordion-body">
                  ${faq.answer}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Attach Process Tab Switcher
  const tabs = section.querySelectorAll('.process-tab-btn');
  const detailsCard = section.querySelector('#process-details-card');

  function renderProcessStep(index) {
    const step = studioData.process[index];
    detailsCard.innerHTML = `
      <div>
        <span class="eyebrow">${step.subtitle} · Duration: ${step.duration}</span>
        <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-text-main); margin-bottom: 16px;">${step.title}</h3>
        <p class="lead" style="margin-bottom: 24px;">${step.description}</p>
        <span style="font-family: var(--font-display); font-size: 0.76rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-accent);">Key Phase Deliverables:</span>
        <ul class="process-deliverables-list">
          ${step.deliverables.map(deliv => `
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${deliv}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div>
        <div style="aspect-ratio: 4/3; border-radius: var(--radius-xs); overflow: hidden; border: 1px solid var(--color-border-light);">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" alt="Process documentation" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
      </div>
    `;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const stepIdx = parseInt(tab.getAttribute('data-step'), 10);
      renderProcessStep(stepIdx);
    });
  });

  renderProcessStep(0);

  // Attach Accordion Toggle
  section.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordion items
      section.querySelectorAll('.accordion-item').forEach(other => {
        other.classList.remove('active');
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        other.querySelector('.accordion-content').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  return section;
}
