import { studioData } from '../data/studio.js';

export function createHero() {
  const section = document.createElement('section');
  section.className = 'hero-section';

  section.innerHTML = `
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <span class="eyebrow">${studioData.tagline}</span>
          <h1 class="hero-headline display-title">${studioData.positioning}</h1>
          <p class="hero-description lead">
            We sculpt residential sanctuaries, boutique hospitality, and bespoke workplaces with quiet materiality, proportion, and architectural light.
          </p>
          <div class="hero-actions">
            <a href="#/projects" class="btn btn-primary">Explore Case Studies</a>
            <a href="#/contact" class="btn btn-outline">Consultation</a>
          </div>
        </div>

        <div class="hero-media-wrapper">
          <div class="hero-image-card">
            <img 
              src="/assets/hero_interior.jpg" 
              alt="Atelier Kin Architectural Living Pavilion" 
              fetchpriority="high"
            />
          </div>

          <div class="hero-badge-floating">
            <span class="badge-val">10+ Yrs</span>
            <span class="badge-txt">Architectural Restraint</span>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
