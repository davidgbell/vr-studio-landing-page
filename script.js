const burger = document.querySelector('.burger-button');
const close = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

close.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});
