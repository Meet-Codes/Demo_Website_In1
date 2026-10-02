import { createHome } from './components/home.js';
import { createAbout } from './components/about.js';
import { createProjectsGrid } from './components/projects.js';
import { createProjectDetail } from './components/projectDetail.js';
import { createServices } from './components/services.js';
import { createJournal } from './components/journal.js';
import { createContact } from './components/contact.js';
import { createMaterialsPage } from './components/materials.js';
import { createEstimatorPage } from './components/estimator.js';
import { updateActiveNav } from './components/header.js';

export class Router {
  constructor(mainContainer) {
    this.container = mainContainer;
    this.curtain = document.getElementById('page-transition-curtain');
    this.currentHomeCleanup = null;
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  init() {
    this.handleRoute();
  }

  async handleRoute() {
    let hash = window.location.hash || '#/';
    if (hash.startsWith('#')) hash = hash.slice(1);
    if (!hash.startsWith('/')) hash = '/' + hash;

    // Trigger subtle page transition curtain
    if (this.curtain) {
      this.curtain.classList.add('active');
      await new Promise(r => setTimeout(r, 120));
    }

    // Clear any timers from previous view
    if (this.currentHomeCleanup) {
      clearInterval(this.currentHomeCleanup);
      this.currentHomeCleanup = null;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Empty container
    this.container.innerHTML = '';

    // Route matching
    if (hash === '/' || hash === '') {
      const homeEl = createHome();
      this.container.appendChild(homeEl);
      if (homeEl.clockInterval) {
        this.currentHomeCleanup = homeEl.clockInterval;
      }
      updateActiveNav('home');
      document.title = 'ATELIER KIN — Architecture & Interior Design Studio';
    } else if (hash === '/about') {
      this.container.appendChild(createAbout());
      updateActiveNav('about');
      document.title = 'About the Atelier — ATELIER KIN';
    } else if (hash === '/projects') {
      this.container.appendChild(createProjectsGrid({ title: "Architecture & Interior Portfolio", showFilters: true }));
      updateActiveNav('projects');
      document.title = 'Projects & Selected Works — ATELIER KIN';
    } else if (hash.startsWith('/projects/')) {
      const slug = hash.replace('/projects/', '');
      this.container.appendChild(createProjectDetail(slug));
      updateActiveNav('projects');
      document.title = `${slug.replace(/-/g, ' ').toUpperCase()} — ATELIER KIN Case Study`;
    } else if (hash === '/materials') {
      this.container.appendChild(createMaterialsPage());
      updateActiveNav('materials');
      document.title = 'Materiality & Provenance Archive — ATELIER KIN';
    } else if (hash === '/estimator') {
      this.container.appendChild(createEstimatorPage());
      updateActiveNav('estimator');
      document.title = 'Spatial Feasibility & Scope Estimator — ATELIER KIN';
    } else if (hash === '/services') {
      this.container.appendChild(createServices());
      updateActiveNav('services');
      document.title = 'Services & Process — ATELIER KIN';
    } else if (hash === '/journal') {
      this.container.appendChild(createJournal());
      updateActiveNav('journal');
      document.title = 'The Journal — ATELIER KIN';
    } else if (hash === '/contact') {
      this.container.appendChild(createContact());
      updateActiveNav('contact');
      document.title = 'Consultation Inquiry — ATELIER KIN';
    } else {
      // 404 state
      const errBox = document.createElement('div');
      errBox.className = 'container-narrow section-padding';
      errBox.style.textAlign = 'center';
      errBox.innerHTML = `
        <span class="eyebrow" style="justify-content: center;">Error 404</span>
        <h1 class="display-title" style="margin-bottom: 20px;">Page Not Found</h1>
        <p class="lead" style="margin-bottom: 32px;">The architectural route you are seeking does not exist or has been archived.</p>
        <a href="#/" class="btn btn-primary">Return to Studio Home</a>
      `;
      this.container.appendChild(errBox);
      updateActiveNav('');
      document.title = 'Page Not Found — ATELIER KIN';
    }

    if (this.curtain) {
      await new Promise(r => setTimeout(r, 60));
      this.curtain.classList.remove('active');
    }
  }
}
