import { studioData } from '../data/studio.js';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-top-grid">
        <!-- Brand Summary -->
        <div class="footer-col">
          <div class="brand-logo" style="margin-bottom: 8px;">
            <div class="brand-logo-mark">K</div>
            <span>${studioData.name}</span>
          </div>
          <p style="font-size: 0.9rem; max-width: 320px; color: var(--color-text-muted);">
            Architecture and interior design practice dedicated to spatial harmony, monolithic materiality, and natural circadian illumination.
          </p>
          <span style="font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 0.15em; color: var(--color-accent); text-transform: uppercase;">
            London · Zurich · Tokyo
          </span>
        </div>

        <!-- Navigation Sitemap -->
        <div class="footer-col">
          <span class="footer-col-title">Navigation</span>
          <ul class="footer-links-list">
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About the Atelier</a></li>
            <li><a href="#/projects">Projects & Case Studies</a></li>
            <li><a href="#/services">Services & Process</a></li>
            <li><a href="#/journal">Journal & Essays</a></li>
            <li><a href="#/contact">Inquire / Consultation</a></li>
          </ul>
        </div>

        <!-- Portfolio Disciplines -->
        <div class="footer-col">
          <span class="footer-col-title">Practices</span>
          <ul class="footer-links-list">
            <li><a href="#/projects">Private Residential</a></li>
            <li><a href="#/projects">Boutique Hospitality</a></li>
            <li><a href="#/projects">Executive Workplaces</a></li>
            <li><a href="#/projects">Cultural Galleries</a></li>
            <li><a href="#/services">Custom Millwork Lab</a></li>
          </ul>
        </div>

        <!-- Direct Inquiries & Newsletter -->
        <div class="footer-col">
          <span class="footer-col-title">Direct Inquiries</span>
          <p style="font-size: 0.95rem; color: var(--color-text-main); margin-bottom: 4px;">${studioData.contacts.email}</p>
          <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 20px;">${studioData.contacts.phone}</p>
          
          <span class="footer-col-title" style="margin-top: 10px;">Atelier Gazette</span>
          <p style="font-size: 0.82rem; color: var(--color-text-subtle); margin-bottom: 10px;">Quarterly architectural essays & private viewing invitations.</p>
          <div style="display: flex; gap: 8px;">
            <input type="email" placeholder="Your email address" style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 8px 12px; font-size: 0.82rem; color: var(--color-text-main); border-radius: var(--radius-xs); width: 100%;" />
            <button class="btn btn-outline" style="padding: 8px 14px; font-size: 0.72rem;">Join</button>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <span>© ${new Date().getFullYear()} ${studioData.name}. All rights reserved.</span>
        <div style="display: flex; gap: 24px;">
          <a href="#/">Privacy Policy</a>
          <a href="#/">Terms of Architectural Engagement</a>
          <a href="#/">Environmental Compliance</a>
        </div>
      </div>
    </div>
  `;

  return footer;
}
