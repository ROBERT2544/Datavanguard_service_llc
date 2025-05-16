const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.nav.left');
const rightBtn = document.querySelector('.nav.right');
let currentIndex = 0;
let intervalTime = 5000;
let slideInterval;

function updateSlider() {
  slider.style.transform = 'translateX(-${currentIndex * 100}%)';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

rightBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

leftBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

startAutoSlide();