let currentSlide = 1;
const totalSlides = 4;

function showSlide(n) {
  for (let i = 1; i <= totalSlides; i++) {
    document.getElementById('slide' + i).classList.remove('active');
  }
  document.getElementById('slide' + n).classList.add('active');
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function restartSlides() {
  currentSlide = 1;
  showSlide(currentSlide);
}
