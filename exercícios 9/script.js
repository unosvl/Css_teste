const abas = document.querySelectorAll('.aba');
const links = document.querySelectorAll('nav a');

function mostraAba(id) {
  abas.forEach((aba) => {
    if (aba.id === id) {
      aba.classList.add('ativa');
    } else {
      aba.classList.remove('ativa');
    }
  });
}

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('href');
    mostraAba(id);
    links.forEach((link) => {
      link.classList.remove('ativa');
    });
    event.target.classList.add('ativa');
  });
});
