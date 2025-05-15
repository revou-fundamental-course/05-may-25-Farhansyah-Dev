
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  menuToggle.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navLinks.classList.toggle('open');
    }
  });

  const slides = document.querySelectorAll('.banner .slide');
  let currentSlide = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  setInterval(nextSlide, 5000);

  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const destination = form.destination.value.trim();
    let errors = [];

    if (!name) errors.push('Name is required.');
    if (!email) errors.push('Email is required.');
    else if (!validateEmail(email)) errors.push('Please enter a valid email address.');
    if (!destination) errors.push('Travel destination is required.');

    if(errors.length > 0) {
      formMessage.style.color = 'white';
      formMessage.innerHTML = errors.join('<br>');
      return;
    }
    formMessage.style.color = 'white';
    formMessage.textContent = `Thank you for contacting us, ${name}! We will get back to you regarding travel to ${destination}.`;
    form.reset();
  });
});
