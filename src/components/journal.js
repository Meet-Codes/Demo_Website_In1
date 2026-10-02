import { journalData } from '../data/journal.js';

export function createJournal() {
  const section = document.createElement('div');
  section.className = 'journal-page';

  section.innerHTML = `
    <!-- Journal Hero -->
    <div class="case-study-hero">
      <div class="container">
        <span class="eyebrow">Editorial & Insights</span>
        <h1 class="display-title" style="margin-bottom: var(--space-md);">The Journal</h1>
        <p class="lead" style="max-width: 780px;">
          Architectural essays, materiality explorations, and technical notes from the partners at Atelier Kin.
        </p>
      </div>
    </div>

    <!-- Articles Grid -->
    <section class="section-padding" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <div class="journal-grid" id="journal-cards-container">
          ${journalData.map(article => `
            <article class="journal-card" data-slug="${article.slug}">
              <div class="journal-card-media">
                <img src="${article.heroImage}" alt="${article.title}" loading="lazy" />
              </div>
              <div class="journal-card-body">
                <div class="journal-meta">
                  <span>${article.category}</span>
                  <span>${article.date} · ${article.readTime}</span>
                </div>
                <h3 class="journal-title serif-heading">${article.title}</h3>
                <p style="font-size: 0.95rem; line-height: 1.6;">${article.excerpt}</p>
                <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between;">
                  <span style="font-size: 0.8rem; color: var(--color-text-subtle);">By ${article.author}</span>
                  <span class="btn-text">Read Essay →</span>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Reading Modal -->
    <div class="lightbox-modal" id="article-reader-modal" style="padding: clamp(1rem, 3vw, 2rem);">
      <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border-light); border-radius: var(--radius-sm); max-width: 820px; width: 100%; max-height: 90vh; overflow-y: auto; padding: clamp(2rem, 5vw, 4rem); position: relative; box-shadow: var(--shadow-floating);">
        <button class="lightbox-close-btn" id="reader-close-btn" aria-label="Close Article" style="position: sticky; top: 0; float: right; z-index: 10;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div id="reader-content-body"></div>
      </div>
    </div>
  `;

  // Reader Modal controls
  const modal = section.querySelector('#article-reader-modal');
  const modalBody = section.querySelector('#reader-content-body');
  const closeBtn = section.querySelector('#reader-close-btn');

  function openArticle(slug) {
    const article = journalData.find(a => a.slug === slug);
    if (!article) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: var(--space-lg);">
        <span class="eyebrow">${article.category} · ${article.date} · ${article.readTime}</span>
        <h1 class="display-title" style="font-size: clamp(2.2rem, 4.5vw, 3.4rem); margin-bottom: 16px;">${article.title}</h1>
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-surface); border: 1px solid var(--color-accent); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); color: var(--color-accent);">
            ${article.author.charAt(0)}
          </div>
          <div>
            <strong style="display: block; color: var(--color-text-main); font-size: 0.9rem;">${article.author}</strong>
            <span style="font-size: 0.78rem; color: var(--color-text-subtle);">${article.authorRole}, Atelier Kin</span>
          </div>
        </div>
        <div style="aspect-ratio: 16/9; border-radius: var(--radius-xs); overflow: hidden; margin-bottom: var(--space-xl); border: 1px solid var(--color-border);">
          <img src="${article.heroImage}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
      </div>
      <div class="article-rich-text" style="color: var(--color-text-muted); line-height: 1.8; font-size: 1.05rem;">
        ${article.content}
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticle() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeArticle);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeArticle();
  });

  section.querySelectorAll('.journal-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-slug');
      openArticle(slug);
    });
  });

  return section;
}
