import { studioData } from '../data/studio.js';

export function createContact() {
  const section = document.createElement('div');
  section.className = 'contact-page';

  section.innerHTML = `
    <!-- Contact Hero -->
    <div class="case-study-hero">
      <div class="container">
        <span class="eyebrow">Direct Inquiries</span>
        <h1 class="display-title" style="margin-bottom: var(--space-md);">Initiate Your Project</h1>
        <p class="lead" style="max-width: 780px;">
          We welcome initial inquiries from discerning private clients, hoteliers, and developers worldwide. Please complete the project brief below to begin our spatial consultation.
        </p>
      </div>
    </div>

    <!-- Contact Content Grid -->
    <section class="section-padding" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Studio Details & Offices -->
          <div class="contact-info-card">
            <div class="contact-detail-block">
              <span class="contact-detail-label">Direct Correspondence</span>
              <p style="font-size: 1.2rem; color: var(--color-text-main);">${studioData.contacts.email}</p>
              <p style="font-size: 1.1rem; color: var(--color-text-muted);">${studioData.contacts.phone}</p>
            </div>

            <div class="contact-detail-block">
              <span class="contact-detail-label">Consultation Hours</span>
              <p>${studioData.contacts.hours}</p>
            </div>

            <div class="contact-detail-block">
              <span class="contact-detail-label">Studio Ateliers</span>
              <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 10px;">
                ${studioData.contacts.locations.map(loc => `
                  <div style="padding-left: 14px; border-left: 2px solid var(--color-accent);">
                    <strong style="color: var(--color-text-main); font-size: 1.1rem; display: block;">${loc.city}</strong>
                    <span style="font-size: 0.9rem; color: var(--color-text-muted);">${loc.address}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right: Progressive Consultation Form -->
          <div class="contact-form-container">
            <form id="consultation-form" novalidate>
              <h2 class="serif-heading" style="font-size: 1.9rem; margin-bottom: 24px;">Project Consultation Brief</h2>

              <div class="form-group">
                <label class="form-label" for="client-name">Full Name *</label>
                <input type="text" id="client-name" class="form-input" placeholder="e.g. Eleanor Vance" required />
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="client-email">Email Address *</label>
                  <input type="email" id="client-email" class="form-input" placeholder="e.g. eleanor@vance.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="client-phone">Phone Number</label>
                  <input type="tel" id="client-phone" class="form-input" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <!-- Project Type Radio Pills -->
              <div class="form-group">
                <label class="form-label">Project Typology *</label>
                <div class="radio-pills">
                  <label class="radio-pill-item">
                    <input type="radio" name="project_type" value="Residential" checked />
                    <span class="radio-pill-box">Residential Estate</span>
                  </label>
                  <label class="radio-pill-item">
                    <input type="radio" name="project_type" value="Hospitality" />
                    <span class="radio-pill-box">Hospitality / Hotel</span>
                  </label>
                  <label class="radio-pill-item">
                    <input type="radio" name="project_type" value="Workplace" />
                    <span class="radio-pill-box">Executive Workplace</span>
                  </label>
                  <label class="radio-pill-item">
                    <input type="radio" name="project_type" value="Commercial / Gallery" />
                    <span class="radio-pill-box">Retail / Gallery</span>
                  </label>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label" for="project-area">Approx. Area (m² or sq ft)</label>
                  <input type="text" id="project-area" class="form-input" placeholder="e.g. 450 m²" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="project-location">Location / City *</label>
                  <input type="text" id="project-location" class="form-input" placeholder="e.g. Zurich / London" required />
                </div>
              </div>

              <!-- Budget Range Radio Pills -->
              <div class="form-group">
                <label class="form-label">Anticipated Budget Range *</label>
                <div class="radio-pills">
                  <label class="radio-pill-item">
                    <input type="radio" name="budget_range" value="£150k – £350k" />
                    <span class="radio-pill-box">£150k – £350k</span>
                  </label>
                  <label class="radio-pill-item">
                    <input type="radio" name="budget_range" value="£350k – £1M" checked />
                    <span class="radio-pill-box">£350k – £1M</span>
                  </label>
                  <label class="radio-pill-item">
                    <input type="radio" name="budget_range" value="£1M+" />
                    <span class="radio-pill-box">£1M+</span>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="project-message">Project Vision & Timeline Notes</label>
                <textarea id="project-message" class="form-textarea" rows="4" placeholder="Briefly describe your property, spatial aspirations, and desired completion horizon..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary" id="submit-brief-btn" style="width: 100%;">
                Submit Consultation Brief
              </button>

              <div class="form-feedback" id="form-feedback-box"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach Form Validation & Submission
  const form = section.querySelector('#consultation-form');
  const feedbackBox = section.querySelector('#form-feedback-box');
  const submitBtn = section.querySelector('#submit-brief-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedbackBox.className = 'form-feedback';
    feedbackBox.style.display = 'none';

    const name = form.querySelector('#client-name').value.trim();
    const email = form.querySelector('#client-email').value.trim();
    const location = form.querySelector('#project-location').value.trim();

    // Basic Validation
    if (!name || !email || !location) {
      feedbackBox.textContent = 'Please complete all required fields marked with an asterisk (*).';
      feedbackBox.classList.add('error');
      feedbackBox.style.display = 'block';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      feedbackBox.textContent = 'Please provide a valid email address so our team can reach you.';
      feedbackBox.classList.add('error');
      feedbackBox.style.display = 'block';
      return;
    }

    // Submission animation state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Transmitting Brief to Partners...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Consultation Brief';

      const refId = 'ATK-' + Math.floor(100000 + Math.random() * 900000);
      feedbackBox.innerHTML = `
        <strong>Thank you, ${name}.</strong><br/>
        Your consultation brief has been recorded under Reference <strong>${refId}</strong>.<br/>
        A founding partner will contact you within 24 business hours to arrange a preliminary review.
      `;
      feedbackBox.classList.add('success');
      feedbackBox.style.display = 'block';
      form.reset();
    }, 900);
  });

  return section;
}
