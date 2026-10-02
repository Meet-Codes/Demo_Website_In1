import { studioData } from '../data/studio.js';

export function createAbout() {
  const section = document.createElement('div');
  section.className = 'about-page';

  section.innerHTML = `
    <!-- About Hero -->
    <div class="case-study-hero">
      <div class="container">
        <span class="eyebrow">Studio Profile & Ethos</span>
        <h1 class="display-title" style="margin-bottom: var(--space-md);">${studioData.name}</h1>
        <p class="lead" style="max-width: 820px;">
          ${studioData.statement}
        </p>
      </div>
    </div>

    <!-- Editorial Story & Philosophy -->
    <section class="section-padding" style="background-color: var(--color-bg-elevated); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
      <div class="container">
        <div class="hero-grid" style="align-items: flex-start;">
          <div>
            <span class="eyebrow">The Atelier</span>
            <h2 class="section-title">Rooted in Proportion, Light & Silence</h2>
          </div>
          <div>
            <p class="lead" style="margin-bottom: var(--space-md);">
              ${studioData.bio}
            </p>
            <p style="margin-bottom: var(--space-md);">
              We reject fleeting trends in favor of enduring architectural values. Our spaces unfold as tranquil sequences, where natural light shifts across tactile plaster, honed stone, and warm timber joinery throughout the day.
            </p>
            <p>
              By restricting ourselves to an unpretentious palette of authentic materials, we cultivate spaces of deep emotional resonance and restorative clarity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Metrics Section -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header text-center" style="text-align: center;">
          <span class="eyebrow">Proven Rigor</span>
          <h2 class="section-title">Measurable Architectural Impact</h2>
        </div>

        <div class="metrics-grid">
          ${studioData.metrics.map(m => `
            <div class="metric-card">
              <span class="metric-value">${m.value}</span>
              <span class="metric-label">${m.label}</span>
              <span class="metric-detail">${m.detail}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Disciplines / Capabilities -->
    <section class="section-padding" style="background-color: var(--color-surface-subtle); border-top: 1px solid var(--color-border);">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow">Our Core Disciplines</span>
          <h2 class="section-title">Holistic Spatial Mastery</h2>
        </div>

        <div class="projects-grid">
          ${studioData.disciplines.map(d => `
            <div class="metric-card" style="text-align: left; background: var(--color-bg-elevated); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 32px;">
              <span style="font-family: var(--font-display); font-size: 0.85rem; color: var(--color-accent); font-weight: 700; margin-bottom: 8px;">${d.number}</span>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-text-main); margin-bottom: 12px;">${d.title}</h3>
              <p style="font-size: 0.95rem; line-height: 1.6;">${d.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Leadership / Principals -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow">Studio Leadership</span>
          <h2 class="section-title">The Principals</h2>
        </div>

        <div class="projects-grid">
          ${studioData.founders.map(f => `
            <div class="project-card" style="cursor: default;">
              <div class="project-card-media" style="aspect-ratio: 1/1;">
                <img src="${f.image}" alt="${f.name}" loading="lazy" />
              </div>
              <div class="project-card-body">
                <span class="eyebrow" style="margin-bottom: 4px;">${f.credentials}</span>
                <h3 class="project-card-title">${f.name}</h3>
                <span style="font-family: var(--font-display); font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-accent);">${f.role}</span>
                <p class="project-card-desc" style="margin-top: 10px;">${f.bio}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="section-padding" style="background: var(--color-bg-elevated); border-top: 1px solid var(--color-border); text-align: center;">
      <div class="container-narrow">
        <span class="eyebrow">Commissioning</span>
        <h2 class="section-title" style="margin-bottom: 16px;">Initiate a Dialogue</h2>
        <p class="lead" style="margin-bottom: 32px;">
          We accept a selective number of architectural and interior commissions annually to guarantee principal-led dedication.
        </p>
        <a href="#/contact" class="btn btn-primary">Schedule a Private Consultation</a>
      </div>
    </section>
  `;

  return section;
}
