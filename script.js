const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.classList.toggle('is-open', isOpen);
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('is-visible');
}), { threshold: 0.12 });

document.querySelectorAll('.section, .reveal, .contact').forEach((item) => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();
