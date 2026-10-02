export function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';

  const follower = document.createElement('div');
  follower.className = 'custom-cursor-follower';
  follower.innerHTML = `<span class="custom-cursor-label" id="cursor-label">VIEW</span>`;

  document.body.appendChild(dot);
  document.body.appendChild(follower);

  const labelEl = follower.querySelector('#cursor-label');

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      follower.style.opacity = '1';
    }
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    follower.style.opacity = '0';
  });

  // Lerp loop for fluid organic follower lag
  function render() {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Dynamic context sensing on hover
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (!target) return;

    // Drag over Before & After slider
    if (target.closest('.before-after-container')) {
      follower.className = 'custom-cursor-follower cursor-drag';
      labelEl.textContent = 'DRAG';
      return;
    }

    // View over Project or Material cards
    if (target.closest('.project-card')) {
      follower.className = 'custom-cursor-follower cursor-view';
      labelEl.textContent = 'VIEW';
      return;
    }

    // Zoom over Gallery items
    if (target.closest('.gallery-item')) {
      follower.className = 'custom-cursor-follower cursor-zoom';
      labelEl.textContent = 'ZOOM';
      return;
    }

    // Interactive buttons & links
    if (target.closest('a, button, .filter-btn, .radio-pill-item, input, select, textarea')) {
      follower.className = 'custom-cursor-follower cursor-hover';
      labelEl.textContent = '';
      return;
    }

    // Default
    follower.className = 'custom-cursor-follower';
    labelEl.textContent = '';
  });
}
