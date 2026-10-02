class Lightbox {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.isOpen = false;
    this.initDOM();
    this.bindEvents();
  }

  initDOM() {
    this.modal = document.createElement('div');
    this.modal.className = 'lightbox-modal';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-label', 'Image Lightbox');

    this.modal.innerHTML = `
      <button class="lightbox-close-btn" aria-label="Close Lightbox" id="lightbox-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <button class="lightbox-nav-btn lightbox-prev" aria-label="Previous Image" id="lightbox-prev">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="lightbox-content">
        <img src="" alt="Enlarged architectural view" id="lightbox-img" />
      </div>

      <button class="lightbox-nav-btn lightbox-next" aria-label="Next Image" id="lightbox-next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div class="lightbox-counter" id="lightbox-counter">1 / 1</div>
    `;

    document.body.appendChild(this.modal);

    this.imgEl = this.modal.querySelector('#lightbox-img');
    this.counterEl = this.modal.querySelector('#lightbox-counter');
    this.closeBtn = this.modal.querySelector('#lightbox-close');
    this.prevBtn = this.modal.querySelector('#lightbox-prev');
    this.nextBtn = this.modal.querySelector('#lightbox-next');
  }

  bindEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });
    this.nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal || e.target.classList.contains('lightbox-content')) {
        this.close();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  open(images, startIndex = 0) {
    if (!images || images.length === 0) return;
    this.images = images;
    this.currentIndex = startIndex;
    this.isOpen = true;
    this.updateImage();
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  prev() {
    if (this.images.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage();
  }

  next() {
    if (this.images.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateImage();
  }

  updateImage() {
    const src = this.images[this.currentIndex];
    this.imgEl.src = src;
    this.counterEl.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
  }
}

export const lightboxInstance = new Lightbox();
