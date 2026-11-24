
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    const isOpen = navigation.classList.contains('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealItems = document.querySelectorAll(
  '.reveal, .quote-section, .card, .welcome'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
