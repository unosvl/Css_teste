window.addEventListener("scroll", function() {
  var imagemFundo = document.querySelector(".imagem-fundo");
  var conteudo = document.querySelector(".conteudo");
  var scrollPosicao = window.pageYOffset;

  imagemFundo.style.transform = "translateY(" + scrollPosicao * 0.5 + "px)";
  conteudo.style.transform = "translateY(" + scrollPosicao * 0.8 + "px)";
});
