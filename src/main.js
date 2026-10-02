import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';

import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { Router } from './router.js';
import { initCustomCursor } from './components/cursor.js';
import { initScrollObserver } from './components/scrollObserver.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Insert header
  const header = createHeader();
  app.insertBefore(header, app.firstChild);

  // Main view root
  const main = document.getElementById('main-content');

  // Insert footer
  const footer = createFooter();
  app.appendChild(footer);

  // Initialize client router
  const router = new Router(main);
  router.init();

  // Initialize Custom Architectural Cursor (Animation 30)
  initCustomCursor();

  // Initialize Scroll Reveals & Metrics Counter (Animations 9, 10, 11)
  initScrollObserver();
});
