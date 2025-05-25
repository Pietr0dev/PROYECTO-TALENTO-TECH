const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2; // Ajusta el índice
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0; // Ajusta el índice
  updateCarousel();
});

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
