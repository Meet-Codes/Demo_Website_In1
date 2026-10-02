import { studioData } from '../data/studio.js';
import { ventureData } from '../data/venture.js';
import { createHero } from './hero.js';
import { createProjectsGrid } from './projects.js';
import { createBeforeAfterSlider } from './beforeAfter.js';
import { journalData } from '../data/journal.js';

export function createHome() {
  const homeWrapper = document.createElement('div');
  homeWrapper.className = 'home-page';

  // 01 Hero Section
  homeWrapper.appendChild(createHero());

  // Institutional Alliances Marquee (Enterprise Venture Trust Signal)
  const alliancesSec = document.createElement('section');
  alliancesSec.style.padding = '24px 0';
  alliancesSec.style.borderTop = '1px solid var(--color-border)';
  alliancesSec.style.borderBottom = '1px solid var(--color-border)';
  alliancesSec.style.backgroundColor = 'var(--color-bg-elevated)';

  alliancesSec.innerHTML = `
    <div class="container">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px;">
        <span style="font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-text-subtle);">
          Institutional Alliances & Patrons
        </span>
        <div style="display: flex; align-items: center; gap: clamp(1.5rem, 4vw, 3.5rem); flex-wrap: wrap;">
          ${ventureData.institutionalAlliances.map(a => `
            <span style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--color-text-muted); letter-spacing: 0.05em; transition: color var(--transition-fast);">
              ${a.name}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  homeWrapper.appendChild(alliancesSec);

  // 02 Studio Statement Section
  const statementSec = document.createElement('section');
  statementSec.className = 'statement-section section-padding';
  statementSec.innerHTML = `
    <div class="container-narrow">
      <div style="text-align: center;">
        <span class="eyebrow" style="justify-content: center;">Philosophy</span>
        <blockquote class="statement-quote">
          "Architecture is not merely what is built, but how <em>light, volume, and texture</em> sculpt human tranquility."
        </blockquote>
        <p class="statement-sub lead">
          ${studioData.statement}
        </p>
      </div>
    </div>
  `;
  homeWrapper.appendChild(statementSec);

  // 03 & 04 Featured Projects with Category filtering
  const projectsSec = createProjectsGrid({
    filter: "All",
    limit: 3,
    title: "Selected Architecture & Case Studies",
    showFilters: true
  });
  homeWrapper.appendChild(projectsSec);

  // 05 Before / After Transformation Section
  const baSec = document.createElement('section');
  baSec.className = 'section-padding';
  baSec.style.backgroundColor = 'var(--color-bg-elevated)';
  baSec.style.borderTop = '1px solid var(--color-border)';
  baSec.style.borderBottom = '1px solid var(--color-border)';

  baSec.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Transformation</span>
        <h2 class="section-title">Before & After Architectural Metamorphosis</h2>
        <p style="margin-top: 8px;">Experience how structural decluttering, honed travertine, and double-height glazing transform dated residential confines into an airy living sanctuary.</p>
      </div>
      <div id="home-ba-container"></div>
    </div>
  `;
  const baContainer = baSec.querySelector('#home-ba-container');
  const slider = createBeforeAfterSlider({
    beforeImage: '/assets/before_renovation.jpg',
    afterImage: '/assets/hero_interior.jpg',
    beforeLabel: '1985 Heritage Enclosed Living Area',
    afterLabel: '2024 Monolithic Travertine Pavilion',
    initialPosition: 50,
    id: 'home-ba-slider'
  });
  baContainer.appendChild(slider);
  homeWrapper.appendChild(baSec);

  // Global Practice: 4 Multi-City Ateliers with Live World Clocks
  const globalSec = document.createElement('section');
  globalSec.className = 'section-padding';
  globalSec.style.borderBottom = '1px solid var(--color-border)';

  globalSec.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Global Practice</span>
        <h2 class="section-title">Four Cross-Continental Ateliers</h2>
        <p style="margin-top: 8px;">Seamless cross-timezone project delivery with dedicated directors in London, Zurich, Tokyo, and New York.</p>
      </div>

      <div class="projects-grid">
        ${ventureData.globalStudios.map(studio => `
          <div class="project-card" style="cursor: default; padding: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
              <div>
                <span class="eyebrow" style="margin-bottom: 4px;">Atelier</span>
                <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-text-main);">${studio.city}</h3>
              </div>
              <div style="text-align: right;">
                <span style="font-family: var(--font-display); font-size: 0.7rem; color: var(--color-text-subtle); display: block;">LOCAL TIME</span>
                <span class="live-clock" data-tz="${studio.timezone}" style="font-family: var(--font-display); font-size: 1.1rem; color: var(--color-accent); font-weight: 600;">--:--:--</span>
              </div>
            </div>

            <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 16px;">${studio.role}</p>
            <p style="font-size: 0.82rem; color: var(--color-text-subtle); margin-bottom: 8px;"><strong>Director:</strong> ${studio.director}</p>
            <p style="font-size: 0.82rem; color: var(--color-text-subtle); margin-bottom: 16px;"><strong>Scale:</strong> ${studio.headcount}</p>
            <div style="padding-top: 12px; border-top: 1px solid var(--color-border); font-size: 0.78rem; color: var(--color-accent);">
              ${studio.specialization}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Start Live Ticking Clocks
  function updateClocks() {
    globalSec.querySelectorAll('.live-clock').forEach(clockEl => {
      const tz = clockEl.getAttribute('data-tz');
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());
        clockEl.textContent = timeStr;
      } catch (_) {}
    });
  }
  updateClocks();
  const clockInterval = setInterval(updateClocks, 1000);
  homeWrapper.clockInterval = clockInterval;
  homeWrapper.appendChild(globalSec);

  // Materials Lab & Feasibility Banner
  const featureBannerSec = document.createElement('section');
  featureBannerSec.className = 'section-padding';
  featureBannerSec.style.backgroundColor = 'var(--color-surface-subtle)';
  featureBannerSec.style.borderBottom = '1px solid var(--color-border)';

  featureBannerSec.innerHTML = `
    <div class="container">
      <div class="hero-grid" style="align-items: center;">
        <div>
          <span class="eyebrow">Enterprise Tools</span>
          <h2 class="section-title">The Material Archive & Feasibility Estimator</h2>
          <p class="lead" style="margin-top: 16px; margin-bottom: 24px;">
            Inspect our 1,200+ physical stone and timber samples, or simulate architectural task force allocations for your upcoming development.
          </p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="#/materials" class="btn btn-primary">Inspect Materiality Lab</a>
            <a href="#/estimator" class="btn btn-outline">Calculate Feasibility</a>
          </div>
        </div>
        <div>
          <div style="aspect-ratio: 16/10; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--color-border-light); box-shadow: var(--shadow-elevated);">
            <img src="/assets/hero_interior.jpg" alt="Atelier Kin Architectural Studies" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
        </div>
      </div>
    </div>
  `;
  homeWrapper.appendChild(featureBannerSec);

  // 06 Studio Intro & 07 Trust Metrics
  const studioIntroSec = document.createElement('section');
  studioIntroSec.className = 'section-padding';
  studioIntroSec.innerHTML = `
    <div class="container">
      <div class="hero-grid" style="align-items: center; margin-bottom: var(--space-3xl);">
        <div>
          <span class="eyebrow">Scale & Recognition</span>
          <h2 class="section-title">An International Architectural Powerhouse</h2>
          <p class="lead" style="margin-top: 16px; margin-bottom: 24px;">
            ${ventureData.stats.totalHeadcount} collaborating across 4 studios with over ${ventureData.stats.squareMetersCurated}.
          </p>
          <a href="#/about" class="btn btn-outline">Our Story & Leadership</a>
        </div>
        <div>
          <div style="aspect-ratio: 16/10; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--color-border-light); box-shadow: var(--shadow-elevated);">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" alt="Atelier Kin Material Study" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- Trust Metrics -->
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
  `;
  homeWrapper.appendChild(studioIntroSec);

  // 08 Process Preview
  const processSec = document.createElement('section');
  processSec.className = 'section-padding';
  processSec.style.backgroundColor = 'var(--color-bg-elevated)';
  processSec.style.borderTop = '1px solid var(--color-border)';
  processSec.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Methodology</span>
        <h2 class="section-title">Structured Architectural Precision</h2>
        <p style="margin-top: 8px;">A four-stage lifecycle engineered to preserve design integrity and financial predictability.</p>
      </div>

      <div class="process-tabs">
        ${studioData.process.map(p => `
          <div class="process-tab-btn" style="cursor: default;">
            <span class="process-tab-num">Stage ${p.step}</span>
            <strong class="process-tab-title">${p.title}</strong>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 8px;">${p.description}</p>
          </div>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: var(--space-xl);">
        <a href="#/services" class="btn btn-outline">Explore Full Methodology & Deliverables</a>
      </div>
    </div>
  `;
  homeWrapper.appendChild(processSec);

  // 09 Monograph & Publications Section
  const monographSec = document.createElement('section');
  monographSec.className = 'section-padding';
  monographSec.style.backgroundColor = 'var(--color-surface-subtle)';
  monographSec.style.borderTop = '1px solid var(--color-border)';

  const mono = ventureData.monographs[0];
  monographSec.innerHTML = `
    <div class="container">
      <div class="hero-grid" style="align-items: center;">
        <div>
          <span class="eyebrow">Official Monograph</span>
          <h2 class="section-title">${mono.title}</h2>
          <p style="font-family: var(--font-display); font-size: 0.85rem; color: var(--color-accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px;">
            Published by ${mono.publisher} (${mono.year}) · Foreword by ${mono.forewordBy}
          </p>
          <p class="lead" style="margin-bottom: 24px;">${mono.description}</p>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span class="tag">${mono.pages}</span>
            <span class="tag">ISBN: ${mono.isbn}</span>
          </div>
        </div>
        <div>
          <div style="aspect-ratio: 4/5; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--color-border-accent); box-shadow: var(--shadow-floating);">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Monograph cover" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
        </div>
      </div>
    </div>
  `;
  homeWrapper.appendChild(monographSec);

  // 10 Testimonials Section (Circular Animated Testimonials)
  const testimonialsSec = document.createElement('section');
  testimonialsSec.className = 'section-padding';
  testimonialsSec.innerHTML = `
    <div class="container">
      <div class="section-header text-center" style="text-align: center; margin-bottom: 2rem;">
        <span class="eyebrow" style="justify-content: center;">Client Perspectives</span>
        <h2 class="section-title">Voices of Trust</h2>
      </div>

      <div id="circular-testimonials-mount-slot"></div>
    </div>
  `;

  // Dynamically mount CircularTestimonials React component
  import('./testimonialsReact.jsx').then(({ mountCircularTestimonials }) => {
    const slot = testimonialsSec.querySelector('#circular-testimonials-mount-slot');
    if (slot) {
      mountCircularTestimonials(slot);
    }
  }).catch(err => {
    console.error("Failed to load CircularTestimonials", err);
  });

  homeWrapper.appendChild(testimonialsSec);

  // 11 Journal Preview
  const journalSec = document.createElement('section');
  journalSec.className = 'section-padding';
  journalSec.style.backgroundColor = 'var(--color-bg-elevated)';
  journalSec.style.borderTop = '1px solid var(--color-border)';
  journalSec.innerHTML = `
    <div class="container">
      <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px;">
        <div>
          <span class="eyebrow">Architectural Journal</span>
          <h2 class="section-title">Recent Insights & Materiality</h2>
        </div>
        <a href="#/journal" class="btn btn-outline">View All Essays</a>
      </div>

      <div class="journal-grid">
        ${journalData.slice(0, 2).map(art => `
          <article class="journal-card" onclick="window.location.hash = '#/journal'">
            <div class="journal-card-media">
              <img src="${art.heroImage}" alt="${art.title}" loading="lazy" />
            </div>
            <div class="journal-card-body">
              <div class="journal-meta">
                <span>${art.category}</span>
                <span>${art.readTime}</span>
              </div>
              <h3 class="journal-title serif-heading">${art.title}</h3>
              <p style="font-size: 0.95rem;">${art.excerpt}</p>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.8rem; color: var(--color-text-subtle);">By ${art.author}</span>
                <span class="btn-text">Read Article →</span>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
  homeWrapper.appendChild(journalSec);

  // 12 Consultation CTA Section
  const ctaSec = document.createElement('section');
  ctaSec.className = 'section-padding';
  ctaSec.style.textAlign = 'center';
  ctaSec.innerHTML = `
    <div class="container-narrow">
      <span class="eyebrow" style="justify-content: center;">Dialogue</span>
      <h2 class="section-title" style="font-size: clamp(2.5rem, 5vw, 4.2rem); margin-bottom: 20px;">Ready to Shape Your Space?</h2>
      <p class="lead" style="margin-bottom: 36px;">
        Tell us about your residential or commercial vision. We invite preliminary spatial consultations with clients globally.
      </p>
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <a href="#/contact" class="btn btn-primary" style="padding: 18px 40px; font-size: 0.85rem;">
          Start a Project Consultation
        </a>
        <a href="#/estimator" class="btn btn-outline" style="padding: 18px 36px; font-size: 0.85rem;">
          Run Feasibility Estimator
        </a>
      </div>
    </div>
  `;
  homeWrapper.appendChild(ctaSec);

  return homeWrapper;
}
