let currentSlide = 1;
const totalSlides = 9;

const slides = document.querySelectorAll('.slide');
const bgMusic = document.getElementById('bg-music');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  if (n <= totalSlides) {
    slides[n - 1].classList.add('active');
    runTypewriter(slides[n - 1].querySelector('.typewriter'));
  }
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

// Typewriter effect trigger
function runTypewriter(element) {
  if (!element) return;
  const fullText = element.getAttribute('data-text') || element.textContent;
  element.textContent = '';
  element.style.width = '0';
  element.style.borderRight = '0.15em solid white';

  let i = 0;
  const interval = setInterval(() => {
    element.textContent += fullText.charAt(i);
    element.style.width = `${(i + 1) * (100 / fullText.length)}%`;
    i++;
    if (i >= fullText.length) {
      clearInterval(interval);
      element.style.borderRight = 'none';
    }
  }, 50);
}

// Gift popup logic (Slide 1)
const giftBtn = document.getElementById('gift-btn');
const giftPopup = document.getElementById('gift-popup');
const closeGiftBtn = document.getElementById('close-gift');
const giftPhoto = document.getElementById('gift-photo');

giftBtn.addEventListener('click', () => {
  giftPopup.classList.remove('hidden');
  // play party popper animation or sound here if you want later
});

closeGiftBtn.addEventListener('click', () => {
  giftPopup.classList.add('hidden');
});

// Initialize first slide and typewriter on page load
window.onload = () => {
  showSlide(currentSlide);
};
