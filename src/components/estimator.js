export function createEstimatorPage() {
  const wrapper = document.createElement('div');
  wrapper.className = 'estimator-page';

  wrapper.innerHTML = `
    <!-- Estimator Hero -->
    <div class="case-study-hero">
      <div class="container">
        <span class="eyebrow">Enterprise Planning Tool</span>
        <h1 class="display-title" style="margin-bottom: var(--space-md);">Spatial Feasibility & Scope Estimator</h1>
        <p class="lead" style="max-width: 820px;">
          Calibrate your project scope, spatial footprint, and team allocation. Our studio deploys bespoke architectural task forces scaled precisely to your property's demands.
        </p>
      </div>
    </div>

    <!-- Estimator Interactive Calculator Grid -->
    <section class="section-padding" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Configuration Inputs -->
          <div class="contact-form-container">
            <h2 class="serif-heading" style="font-size: 1.8rem; margin-bottom: 24px;">Project Parameters</h2>

            <!-- Typology -->
            <div class="form-group">
              <label class="form-label">Project Typology</label>
              <div class="radio-pills" id="est-typology">
                <label class="radio-pill-item">
                  <input type="radio" name="est_typology" value="Residential Estate" checked />
                  <span class="radio-pill-box">Residential Estate</span>
                </label>
                <label class="radio-pill-item">
                  <input type="radio" name="est_typology" value="Urban Penthouse" />
                  <span class="radio-pill-box">Urban Penthouse</span>
                </label>
                <label class="radio-pill-item">
                  <input type="radio" name="est_typology" value="Boutique Hotel" />
                  <span class="radio-pill-box">Boutique Hotel & Spa</span>
                </label>
                <label class="radio-pill-item">
                  <input type="radio" name="est_typology" value="Executive Workplace" />
                  <span class="radio-pill-box">Executive Workplace</span>
                </label>
              </div>
            </div>

            <!-- Area Slider -->
            <div class="form-group" style="margin-top: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label class="form-label" style="margin-bottom: 0;">Spatial Footprint (m²)</label>
                <span id="est-area-display" style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-accent);">450 m²</span>
              </div>
              <input type="range" id="est-area-slider" min="150" max="3000" step="50" value="450" style="width: 100%; accent-color: var(--color-accent); cursor: pointer;" />
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--color-text-subtle); margin-top: 4px;">
                <span>150 m² (Apartment)</span>
                <span>1,200 m² (Hotel / HQ)</span>
                <span>3,000 m² (Grand Estate)</span>
              </div>
            </div>

            <!-- Scope Tier -->
            <div class="form-group" style="margin-top: 24px;">
              <label class="form-label">Architectural Engagement Tier</label>
              <div class="radio-pills" id="est-tier">
                <label class="radio-pill-item">
                  <input type="radio" name="est_tier" value="turnkey" checked />
                  <span class="radio-pill-box">Full Turnkey Architecture & Delivery</span>
                </label>
                <label class="radio-pill-item">
                  <input type="radio" name="est_tier" value="interior" />
                  <span class="radio-pill-box">Interior Architecture & Joinery Lab</span>
                </label>
                <label class="radio-pill-item">
                  <input type="radio" name="est_tier" value="heritage" />
                  <span class="radio-pill-box">Heritage Conservation & Retrofit</span>
                </label>
              </div>
            </div>

            <!-- Location Region -->
            <div class="form-group" style="margin-top: 24px;">
              <label class="form-label">Regional Atelier Hub</label>
              <select id="est-region" class="form-select">
                <option value="UK & Western Europe">London Atelier (UK & Western Europe)</option>
                <option value="Switzerland & Central Europe">Zurich Atelier (DACH & Alpine Regions)</option>
                <option value="Japan & Asia Pacific">Tokyo Atelier (Japan & Asia-Pacific)</option>
                <option value="Americas">New York Atelier (North America & Caribbean)</option>
              </select>
            </div>
          </div>

          <!-- Right: Dynamic Architectural Task Force & Roadmap Output -->
          <div class="contact-info-card" style="background: var(--color-bg-elevated); border: 1px solid var(--color-border-light); border-radius: var(--radius-sm); padding: clamp(2rem, 4vw, 3rem);">
            <span class="eyebrow">Feasibility Calculation</span>
            <h3 class="serif-heading" style="font-size: 2.1rem; color: var(--color-accent); margin-bottom: 12px;">Dedicated Task Force</h3>

            <div class="case-study-stats-grid" style="margin-bottom: 24px; padding: 18px;">
              <div class="stat-item">
                <span class="stat-label">Projected Horizon</span>
                <span class="stat-val" id="res-duration">8 – 12 Months</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Core Team Size</span>
                <span class="stat-val" id="res-team-size">6 Dedicated Specialists</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">BIM Detailing Level</span>
                <span class="stat-val">LOD 400 (Fabrication)</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Supervision Visits</span>
                <span class="stat-val" id="res-supervision">Bi-Weekly On-Site</span>
              </div>
            </div>

            <!-- Team Composition List -->
            <div style="margin-bottom: 24px;">
              <span class="form-label" style="display: block; margin-bottom: 12px;">Allocated Leadership & Specialists:</span>
              <ul class="process-deliverables-list" id="res-team-list">
                <!-- Dynamically updated -->
              </ul>
            </div>

            <!-- Key Milestones -->
            <div style="margin-bottom: 28px; padding-top: 20px; border-top: 1px solid var(--color-border);">
              <span class="form-label" style="display: block; margin-bottom: 8px;">Key Phased Milestones:</span>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;" id="res-milestones">
                Phase 1: Solar & Acoustic Site Audit (4 wks) → Phase 2: Material Palette & 3D Spatial Study (6 wks) → Phase 3: Millimeter Joinery Tender (8 wks) → Phase 4: White-Glove Commissioning.
              </p>
            </div>

            <a href="#/contact" class="btn btn-primary" id="est-proceed-btn" style="width: 100%; text-align: center;">
              Transfer Feasibility Parameters to Consultation Brief →
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Dynamic Calculation Logic
  const slider = wrapper.querySelector('#est-area-slider');
  const areaDisplay = wrapper.querySelector('#est-area-display');
  const durationDisplay = wrapper.querySelector('#res-duration');
  const teamSizeDisplay = wrapper.querySelector('#res-team-size');
  const teamList = wrapper.querySelector('#res-team-list');
  const supervisionDisplay = wrapper.querySelector('#res-supervision');

  function calculate() {
    const area = parseInt(slider.value, 10);
    areaDisplay.textContent = `${area.toLocaleString()} m² (${Math.round(area * 10.764)} sq ft)`;

    const selectedTypology = wrapper.querySelector('input[name="est_typology"]:checked').value;
    const selectedTier = wrapper.querySelector('input[name="est_tier"]:checked').value;

    let months = 6;
    let teamCount = 4;
    let specialists = [
      "1× Studio Founding Principal (Design Authority)",
      "1× Senior Project Architect (BIM & Code)",
      "1× Interior Scenographer (Materiality & Joinery)"
    ];

    if (area > 500) {
      months += 3;
      teamCount += 2;
      specialists.push("1× Dedicated Acoustic & Lighting Engineer");
      specialists.push("1× Master Joinery Draftsman");
    }

    if (area > 1500 || selectedTypology === "Boutique Hotel") {
      months += 4;
      teamCount += 3;
      specialists.push("1× Executive Hospitality Coordinator");
      specialists.push("1× Global Procurement & FF&E Director");
    }

    if (selectedTier === "heritage") {
      months += 2;
      specialists.push("1× Historic Monuments & Stone Conservator");
      teamCount += 1;
    }

    durationDisplay.textContent = `${months} – ${months + 4} Months`;
    teamSizeDisplay.textContent = `${teamCount} Dedicated Specialists`;
    supervisionDisplay.textContent = area > 1000 ? "Weekly Principal Site Review" : "Bi-Weekly On-Site Supervision";

    teamList.innerHTML = specialists.map(s => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${s}</span>
      </li>
    `).join('');
  }

  slider.addEventListener('input', calculate);
  wrapper.querySelectorAll('input[type="radio"]').forEach(r => r.addEventListener('change', calculate));
  wrapper.querySelector('#est-region').addEventListener('change', calculate);

  calculate();

  return wrapper;
}
