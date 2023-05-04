var form = document.getElementById("form-contato");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
  if (!validarNome()) {
    event.preventDefault();
  }
  if (!validarEmail()) {
    event.preventDefault();
  }
  if (!validarMensagem()) {
    event.preventDefault();
  }
});

function validarNome() {
  if (nome.value === "") {
    alert("Por favor, informe o seu nome.");
    nome.focus();
    return false;
  }
  return true;
}

function validarEmail() {
  if (email.value === "") {
    alert("Por favor, informe o seu email.");
    email.focus();
    return false;
  }
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    alert("Por favor, informe um email válido.");
    email.focus();
    return false;
  }
  return true;
}

function validarMensagem() {
  if (mensagem.value === "") {
    alert("Por favor, escreva uma mensagem.");
    mensagem.focus();
    return false;
  }
