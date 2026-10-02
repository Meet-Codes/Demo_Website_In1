import { projectsData } from '../data/projects.js';
import { createBeforeAfterSlider } from './beforeAfter.js';
import { lightboxInstance } from './lightbox.js';

export function createProjectDetail(slug) {
  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectIndex !== -1 ? projectsData[projectIndex] : projectsData[0];
  
  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  const wrapper = document.createElement('div');
  wrapper.className = 'case-study-page';

  wrapper.innerHTML = `
    <div class="case-study-hero">
      <div class="container">
        <div class="case-study-header">
          <a href="#/projects" class="btn-text" style="margin-bottom: 12px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            All Projects
          </a>
          <span class="eyebrow">${project.category} · ${project.year}</span>
          <h1 class="display-title">${project.title}</h1>
          <p class="lead">${project.shortDescription}</p>
        </div>

        <div class="case-study-stats-grid">
          <div class="stat-item">
            <span class="stat-label">Location</span>
            <span class="stat-val">${project.location}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Total Area</span>
            <span class="stat-val">${project.area}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Timeline</span>
            <span class="stat-val">${project.year}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Services</span>
            <span class="stat-val">${project.services ? project.services.slice(0, 2).join(', ') : 'Architecture'}</span>
          </div>
        </div>

        <div class="case-study-hero-img">
          <img src="${project.heroImage}" alt="${project.title} Primary View" />
        </div>

        <div class="case-study-narrative">
          <div class="narrative-sticky-title">
            <span class="eyebrow">Case Study Narrative</span>
            <h2 class="section-title">The Spatial Journey</h2>
            <p style="margin-top: 16px;">
              Every line drawn is an answer to client desires, site topography, and microclimatic lighting factors.
            </p>
          </div>

          <div class="narrative-body">
            <div class="narrative-block">
              <h3>01. Context & Brief</h3>
              <p>${project.longDescription}</p>
              <p>${project.requirements}</p>
            </div>

            <div class="narrative-block">
              <h3>02. The Architectural Challenge</h3>
              <p>${project.challenge}</p>
            </div>

            <div class="narrative-block">
              <h3>03. Design Response & Materiality</h3>
              <p>${project.approach}</p>
            </div>

            <div class="narrative-block">
              <h3>04. Execution & Craftsmanship</h3>
              <p>${project.execution}</p>
            </div>

            <div class="narrative-block">
              <h3>05. Spatial Outcome</h3>
              <p>${project.outcome}</p>
            </div>
          </div>
        </div>

        <!-- Before / After Transformation Section -->
        <div class="section-header" style="margin-top: var(--space-3xl); margin-bottom: 24px;">
          <span class="eyebrow">Metamorphosis</span>
          <h2 class="section-title">Site Transformation</h2>
        </div>
        <div id="project-ba-slot" style="margin-bottom: var(--space-3xl);"></div>

        <!-- Gallery Section -->
        <div class="section-header">
          <span class="eyebrow">Visual Documentation</span>
          <h2 class="section-title">Architectural Gallery</h2>
          <p style="margin-top: 8px;">Click any image to enter full-screen high-resolution inspection mode.</p>
        </div>

        <div class="case-study-gallery-grid" id="project-gallery-grid">
          ${project.gallery.map((imgUrl, i) => `
            <div class="gallery-item" data-index="${i}">
              <img src="${imgUrl}" alt="${project.title} Detail ${i + 1}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Testimonial Quote Banner -->
        ${project.testimonial ? `
          <div class="testimonials-wrapper" style="margin-bottom: var(--space-3xl);">
            <div class="testimonial-slide">
              <span class="eyebrow" style="margin-bottom: 0;">Client Perspective</span>
              <p class="testimonial-quote">"${project.testimonial.quote}"</p>
              <div class="testimonial-author-box">
                <span class="testimonial-author-name">${project.testimonial.author}</span>
                <span class="testimonial-author-role">${project.testimonial.role} — ${project.title}</span>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Next / Previous Navigation Bar -->
        <div class="project-nav-bar">
          <a href="#/projects/${prevProject.slug}" class="btn-text">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <div>
              <span style="display: block; font-size: 0.7rem; color: var(--color-text-subtle);">Previous Project</span>
              <strong>${prevProject.title}</strong>
            </div>
          </a>

          <a href="#/projects" class="btn btn-outline" style="padding: 10px 20px; font-size: 0.74rem;">
            All Works
          </a>

          <a href="#/projects/${nextProject.slug}" class="btn-text" style="text-align: right;">
            <div>
              <span style="display: block; font-size: 0.7rem; color: var(--color-text-subtle);">Next Project</span>
              <strong>${nextProject.title}</strong>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach Before/After slider
  const baSlot = wrapper.querySelector('#project-ba-slot');
  const slider = createBeforeAfterSlider({
    beforeImage: project.beforeImage || '/assets/before_renovation.jpg',
    afterImage: project.afterImage || project.heroImage,
    beforeLabel: project.beforeLabel || 'Site Prior to Transformation',
    afterLabel: project.afterLabel || 'Completed Architectural Spatial Environment',
    initialPosition: 50,
    id: `ba-slider-${project.slug}`
  });
  baSlot.appendChild(slider);

  // Attach Lightbox triggers to gallery
  wrapper.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      lightboxInstance.open(project.gallery, idx);
    });
  });

  return wrapper;
}
