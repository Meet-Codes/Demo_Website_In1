import { materialsData } from '../data/materials.js';

export function createMaterialsPage() {
  const wrapper = document.createElement('div');
  wrapper.className = 'materials-page';

  const categories = ["All", "Natural Stone", "Architectural Timber", "Artisanal Metal", "Textiles & Upholstery"];

  wrapper.innerHTML = `
    <!-- Materials Hero -->
    <div class="case-study-hero">
      <div class="container">
        <span class="eyebrow">The Atelier Material Archive</span>
        <h1 class="display-title" style="margin-bottom: var(--space-md);">Materiality & Provenance</h1>
        <p class="lead" style="max-width: 820px;">
          True architectural authority stems from direct quarry relationships, certified sustainable alpine forestry, and custom metal foundry partnerships. Explore our tactile material palette.
        </p>

        <!-- Category Filters -->
        <div class="projects-filter-bar" style="margin-top: var(--space-xl);" role="tablist">
          ${categories.map((c, i) => `
            <button class="filter-btn ${i === 0 ? 'active' : ''}" data-cat="${c}" role="tab">
              ${c}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Materials Grid -->
    <section class="section-padding" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <div class="projects-grid" id="materials-grid-container">
          <!-- Populated by script -->
        </div>
      </div>
    </section>

    <!-- Material Inspection Modal -->
    <div class="lightbox-modal" id="material-modal">
      <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border-light); border-radius: var(--radius-sm); max-width: 780px; width: 100%; max-height: 90vh; overflow-y: auto; padding: clamp(2rem, 5vw, 3.5rem); position: relative; box-shadow: var(--shadow-floating);">
        <button class="lightbox-close-btn" id="material-modal-close" aria-label="Close Material Modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div id="material-modal-content"></div>
      </div>
    </div>
  `;

  const gridContainer = wrapper.querySelector('#materials-grid-container');
  const modal = wrapper.querySelector('#material-modal');
  const modalContent = wrapper.querySelector('#material-modal-content');
  const modalClose = wrapper.querySelector('#material-modal-close');

  function renderMaterials(category = "All") {
    let list = materialsData;
    if (category !== "All") {
      list = list.filter(m => m.category === category);
    }

    gridContainer.innerHTML = list.map(item => `
      <article class="project-card" data-material-id="${item.id}">
        <div class="project-card-media" style="aspect-ratio: 16/11;">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <span class="project-card-badge" style="background: ${item.swatchColor}; color: #121211; font-weight: 700;">
            ${item.category}
          </span>
        </div>
        <div class="project-card-body">
          <div class="project-card-meta">
            <span>${item.origin}</span>
            <span>${item.finish}</span>
          </div>
          <h3 class="project-card-title">${item.name}</h3>
          <p class="project-card-desc">${item.description}</p>
          <div class="project-card-footer">
            <span>Inspect Provenance & Technical Spec</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click events
    gridContainer.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-material-id');
        openMaterialModal(id);
      });
    });
  }

  function openMaterialModal(id) {
    const item = materialsData.find(m => m.id === id);
    if (!item) return;

    modalContent.innerHTML = `
      <span class="eyebrow">${item.category} · Provenance Certified</span>
      <h2 class="display-title" style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 12px;">${item.name}</h2>
      <p class="lead" style="margin-bottom: 24px;">${item.description}</p>

      <div style="aspect-ratio: 16/9; border-radius: var(--radius-xs); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--color-border);">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>

      <div class="case-study-stats-grid" style="margin-bottom: 24px;">
        <div class="stat-item">
          <span class="stat-label">Geological Origin</span>
          <span class="stat-val">${item.origin}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Surface Finish</span>
          <span class="stat-val">${item.finish}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Material Density</span>
          <span class="stat-val">${item.density}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Acoustic Rating</span>
          <span class="stat-val">${item.acousticPerformance.split(' ')[0]}</span>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-accent); margin-bottom: 8px;">Provenance & Extraction Story</h4>
        <p style="color: var(--color-text-muted); line-height: 1.7;">${item.provenanceStory}</p>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-accent); margin-bottom: 8px;">Acoustic & Environmental Integration</h4>
        <p style="color: var(--color-text-muted); line-height: 1.7;">${item.acousticPerformance}</p>
      </div>

      <div style="padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <span style="font-size: 0.85rem; color: var(--color-text-subtle);">Applied in: <strong>${item.featuredProjects.join(', ')}</strong></span>
        <a href="#/projects" class="btn btn-outline" style="padding: 10px 18px; font-size: 0.74rem;">View In Context</a>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Filter clicks
  wrapper.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrapper.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMaterials(btn.getAttribute('data-cat'));
    });
  });

  // Initial render
  renderMaterials();

  return wrapper;
}
