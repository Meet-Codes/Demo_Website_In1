import { studioData } from '../data/studio.js';
import { initClientPortalModal } from './clientPortalModal.js';

let portalInstance = null;

export function createHeader() {
  if (!portalInstance) {
    portalInstance = initClientPortalModal();
  }

  const header = document.createElement('header');
  header.className = 'site-header';
  header.id = 'site-header';

  header.innerHTML = `
    <div class="container header-container">
      <a href="#/" class="brand-logo" aria-label="${studioData.name} Home">
        <div class="brand-logo-mark">K</div>
        <span>${studioData.name}</span>
      </a>

      <nav class="desktop-nav" aria-label="Main Navigation">
        <a href="#/" class="nav-link" data-route="home">Home</a>
        <a href="#/about" class="nav-link" data-route="about">About</a>
        <a href="#/projects" class="nav-link" data-route="projects">Projects</a>
        <a href="#/materials" class="nav-link" data-route="materials">Materials Lab</a>
        <a href="#/estimator" class="nav-link" data-route="estimator">Feasibility</a>
        <a href="#/services" class="nav-link" data-route="services">Services & Process</a>
        <a href="#/journal" class="nav-link" data-route="journal">Journal</a>
        <a href="#/contact" class="nav-link" data-route="contact">Contact</a>
      </nav>

      <div class="header-actions">
        <button class="btn btn-outline" id="client-portal-btn" style="padding: 8px 14px; font-size: 0.7rem; display: inline-flex; align-items: center; gap: 6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Client Access
        </button>

        <a href="#/contact" class="btn btn-primary" style="padding: 10px 18px; font-size: 0.74rem;">
          Start a Project
        </a>

        <button class="menu-toggle-btn" id="menu-toggle-btn" aria-label="Toggle Navigation Menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div class="mobile-nav-overlay" id="mobile-nav-overlay" aria-hidden="true">
      <div class="mobile-nav-links">
        <a href="#/" class="mobile-nav-link" data-route="home">Home</a>
        <a href="#/about" class="mobile-nav-link" data-route="about">About</a>
        <a href="#/projects" class="mobile-nav-link" data-route="projects">Projects</a>
        <a href="#/materials" class="mobile-nav-link" data-route="materials">Materials Lab</a>
        <a href="#/estimator" class="mobile-nav-link" data-route="estimator">Feasibility</a>
        <a href="#/services" class="mobile-nav-link" data-route="services">Services & Process</a>
        <a href="#/journal" class="mobile-nav-link" data-route="journal">Journal</a>
        <a href="#/contact" class="mobile-nav-link" data-route="contact">Contact</a>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <button class="btn btn-outline" id="mobile-portal-btn" style="width: 100%;">
          Client Portal Access
        </button>
        <a href="#/contact" class="btn btn-primary" id="mobile-start-btn" style="width: 100%; text-align: center;">
          Start a Project
        </a>
      </div>
    </div>
  `;

  // Scroll listener for sticky header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  const toggleBtn = header.querySelector('#menu-toggle-btn');
  const overlay = header.querySelector('#mobile-nav-overlay');
  const mobileLinks = header.querySelectorAll('.mobile-nav-link, #mobile-start-btn');

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !overlay.classList.contains('open');
    overlay.classList.toggle('open', isOpen);
    overlay.setAttribute('aria-hidden', String(!isOpen));
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Client Portal triggers
  header.querySelector('#client-portal-btn').addEventListener('click', () => portalInstance.open());
  header.querySelector('#mobile-portal-btn').addEventListener('click', () => {
    toggleMenu(false);
    portalInstance.open();
  });

  return header;
}

export function updateActiveNav(routeName) {
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const route = link.getAttribute('data-route');
    if (route === routeName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
