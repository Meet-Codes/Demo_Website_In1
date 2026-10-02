import { projectsData, projectCategories } from '../data/projects.js';

export function createProjectsGrid({ 
  filter = "All", 
  limit = null, 
  title = "Selected Architecture & Interiors",
  showFilters = true 
} = {}) {
  const section = document.createElement('section');
  section.className = 'projects-section section-padding';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">Portfolio Index</span>
        <h2 class="section-title">${title}</h2>
      </div>

      ${showFilters ? `
        <div class="projects-filter-bar" role="tablist" aria-label="Project Category Filter">
          ${projectCategories.map(cat => `
            <button 
              class="filter-btn ${cat === filter ? 'active' : ''}" 
              data-category="${cat}"
              role="tab"
              aria-selected="${cat === filter ? 'true' : 'false'}"
            >
              ${cat}
            </button>
          `).join('')}
        </div>
      ` : ''}

      <div class="projects-grid" id="projects-grid-container">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;

  const gridContainer = section.querySelector('#projects-grid-container');

  function renderCards(selectedCat) {
    let list = projectsData;
    if (selectedCat && selectedCat !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === selectedCat.toLowerCase());
    }
    if (limit) {
      list = list.slice(0, limit);
    }

    gridContainer.innerHTML = list.map(project => `
      <article class="project-card" data-slug="${project.slug}">
        <div class="project-card-media">
          <img src="${project.heroImage}" alt="${project.title}" loading="lazy" />
          <span class="project-card-badge">${project.category}</span>
        </div>
        <div class="project-card-body">
          <div class="project-card-meta">
            <span>${project.location}</span>
            <span>${project.year}</span>
          </div>
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.shortDescription}</p>
          <div class="project-card-footer">
            <span>Explore Case Study</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </article>
    `).join('');

    // Attach card click handlers to route to case study
    gridContainer.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-slug');
        window.location.hash = `#/projects/${slug}`;
      });
    });
  }

  // Initial render
  renderCards(filter);

  // Filter button clicks
  if (showFilters) {
    section.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        section.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const cat = btn.getAttribute('data-category');
        renderCards(cat);
      });
    });
  }

  return section;
}
