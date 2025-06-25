

const airpodsGallery = {
  images: [
    "airpods image 1.jpg",
    "air pods image 2.jpg",
    "air pods image 4.jpg",
    "air pods image 3.jpg",
    "air pods image 5.jpg",
    "airpods image 6.jpg",
  ],
  currentIndex: 0,

  init() {
    this.slidesContainer = document.querySelector('.gallery-slides');
    this.prevBtn = document.querySelector('.gallery-arrow.prev');
    this.nextBtn = document.querySelector('.gallery-arrow.next');
    
    this.renderSlides();
    this.updateVisibleSlide();
    this.addEventListeners();
  },

  renderSlides() {
    this.slidesContainer.innerHTML = this.images.map((img, index) =>
      `<img src="${img}" alt="AirPods ${index + 1}" class="slide">`
    ).join('');
    this.slides = document.querySelectorAll('.gallery-slides .slide');
  },

  updateVisibleSlide() {
    this.slides.forEach((slide, index) => {
      slide.style.display = index === this.currentIndex ? 'block' : 'none';
    });
  },

  addEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.updateVisibleSlide();
    });

    this.nextBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateVisibleSlide();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  airpodsGallery.init();
});
