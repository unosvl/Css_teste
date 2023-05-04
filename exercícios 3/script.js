const menuIcone = document.querySelector('.menu-icone');
const menu = document.querySelector('.menu');

menuIcone.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});
