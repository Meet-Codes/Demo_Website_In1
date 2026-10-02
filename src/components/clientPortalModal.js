export function initClientPortalModal() {
  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.id = 'client-portal-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-label', 'Confidential Client Portal');

  modal.innerHTML = `
    <div style="background: var(--color-bg-elevated); border: 1px solid var(--color-border-accent); border-radius: var(--radius-sm); max-width: 520px; width: 100%; padding: clamp(2rem, 5vw, 3rem); position: relative; box-shadow: var(--shadow-floating);">
      <button class="lightbox-close-btn" id="portal-close-btn" aria-label="Close Portal Modal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div style="text-align: center; margin-bottom: 24px;">
        <div style="width: 54px; height: 54px; border-radius: 50%; border: 1px solid var(--color-accent); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--color-accent); background: var(--color-accent-subtle);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <span class="eyebrow" style="justify-content: center; margin-bottom: 4px;">Confidential Access</span>
        <h3 class="serif-heading" style="font-size: 1.8rem; color: var(--color-text-main);">VIP Client Portal</h3>
        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 4px;">
          Encrypted gateway for active commission tracking, 3D BIM models, and site documentation.
        </p>
      </div>

      <form id="portal-login-form">
        <div class="form-group">
          <label class="form-label" for="portal-client-id">Client Project Dossier ID</label>
          <input type="text" id="portal-client-id" class="form-input" placeholder="e.g. ATK-SOLSTICE-2024" value="ATK-DEMO-VIP" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="portal-passkey">Biometric Passkey / Security Token</label>
          <input type="password" id="portal-passkey" class="form-input" placeholder="••••••••••••" value="demo1234" required />
        </div>

        <button type="submit" class="btn btn-primary" id="portal-submit-btn" style="width: 100%; margin-top: 12px;">
          Authenticate & Decrypt Dossier
        </button>

        <div id="portal-feedback" style="display: none; margin-top: 16px; padding: 14px; border-radius: var(--radius-xs); font-size: 0.88rem; line-height: 1.5;"></div>
      </form>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; font-size: 0.74rem; color: var(--color-text-subtle);">
        <span>256-bit TLS Encrypted</span>
        <span>RIBA / SIA Security Standard</span>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('#portal-close-btn');
  const form = modal.querySelector('#portal-login-form');
  const feedback = modal.querySelector('#portal-feedback');
  const submitBtn = modal.querySelector('#portal-submit-btn');

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Verifying Hardware Token...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Authenticate & Decrypt Dossier';
      feedback.style.display = 'block';
      feedback.style.background = 'rgba(46, 125, 50, 0.15)';
      feedback.style.border = '1px solid rgba(46, 125, 50, 0.4)';
      feedback.style.color = '#a5d6a7';
      feedback.innerHTML = `
        <strong>Authentication Verified:</strong><br/>
        Active Commission: <em>The Solstice Residence (Kyoto)</em><br/>
        Status: <strong>Phase 4 / White-Glove Commissioning (92% Complete)</strong><br/>
        Live Site Camera: <span style="color: #69f0ae;">● Online (HD Stream Available)</span>
      `;
    }, 700);
  });

  return {
    open: () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };
}
