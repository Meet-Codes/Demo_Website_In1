export function createBeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Original Condition",
  afterLabel = "Completed Architecture",
  initialPosition = 50,
  id = "ba-slider"
}) {
  const container = document.createElement('div');
  container.className = 'before-after-wrapper';
  
  container.innerHTML = `
    <div 
      class="before-after-container" 
      id="${id}" 
      role="slider" 
      aria-label="Before and After Architectural Transformation Comparison" 
      aria-valuemin="0" 
      aria-valuemax="100" 
      aria-valuenow="${initialPosition}" 
      tabindex="0"
    >
      <div class="ba-image-layer ba-after-layer">
        <img src="${afterImage}" alt="${afterLabel}" loading="lazy" />
        <span class="ba-label ba-label-after">${afterLabel}</span>
      </div>

      <div class="ba-image-layer ba-before-layer" style="width: ${initialPosition}%;">
        <img src="${beforeImage}" alt="${beforeLabel}" loading="lazy" />
        <span class="ba-label ba-label-before">${beforeLabel}</span>
      </div>

      <div class="ba-handle" style="left: ${initialPosition}%;">
        <div class="ba-handle-circle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 15 12 9 6" transform="translate(6, 0) scale(-1, 1) translate(-24, 0)"></polyline>
          </svg>
        </div>
      </div>
    </div>
    <div class="ba-instructions">
      <span>Drag slider horizontally or use Left / Right arrow keys</span>
      <span>${beforeLabel} ⟷ ${afterLabel}</span>
    </div>
  `;

  // Attach interactive drag & keyboard handlers
  const sliderEl = container.querySelector('.before-after-container');
  const beforeLayer = container.querySelector('.ba-before-layer');
  const beforeImg = beforeLayer.querySelector('img');
  const handle = container.querySelector('.ba-handle');

  let isDragging = false;
  let currentPosition = initialPosition;

  function syncImageWidth() {
    // Keep beforeImage full width so clipping behaves accurately
    const containerWidth = sliderEl.offsetWidth;
    beforeImg.style.width = `${containerWidth}px`;
  }

  function setPosition(percentage) {
    const clamped = Math.max(0, Math.min(100, percentage));
    currentPosition = clamped;
    beforeLayer.style.width = `${clamped}%`;
    handle.style.left = `${clamped}%`;
    sliderEl.setAttribute('aria-valuenow', Math.round(clamped));
  }

  function handlePointerMove(e) {
    if (!isDragging) return;
    const rect = sliderEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setPosition(pct);
  }

  function stopDragging(e) {
    if (!isDragging) return;
    isDragging = false;
    try {
      sliderEl.releasePointerCapture(e.pointerId);
    } catch (_) {}
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', stopDragging);
    window.removeEventListener('pointercancel', stopDragging);
  }

  sliderEl.addEventListener('pointerdown', (e) => {
    isDragging = true;
    syncImageWidth();
    try {
      sliderEl.setPointerCapture(e.pointerId);
    } catch (_) {}
    const rect = sliderEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setPosition((x / rect.width) * 100);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);
  });

  sliderEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition(currentPosition - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition(currentPosition + 5);
    }
  });

  window.addEventListener('resize', syncImageWidth);
  setTimeout(syncImageWidth, 50);

  return container;
}
