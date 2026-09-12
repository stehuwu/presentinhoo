// MENU DO CELULAR

const botaoMenu =
  document.querySelector(".menu-btn");

const menu =
  document.querySelector(".menu");


botaoMenu.addEventListener(
  "click",
  function () {

    menu.classList.toggle("ativo");

  }
);


// FECHAR MENU AO CLICAR

const linksMenu =
  document.querySelectorAll(".menu a");


linksMenu.forEach(function (link) {

  link.addEventListener(
    "click",
    function () {

      menu.classList.remove("ativo");

    }
  );

});


// GALERIA

const fotos =
  document.querySelectorAll(".galeria img");

const modal =
  document.getElementById("modal");

const imagemGrande =
  document.getElementById("imagem-grande");

const fechar =
  document.getElementById("fechar");


fotos.forEach(function (foto) {

  foto.addEventListener(
    "click",
    function () {

      modal.style.display = "flex";

      imagemGrande.src =
        foto.src;

    }
  );

});


// FECHAR NO X

fechar.addEventListener(
  "click",
  function () {

    modal.style.display = "none";

  }
);


// FECHAR CLICANDO FORA DA FOTO

modal.addEventListener(
  "click",
  function (evento) {

    if (
      evento.target === modal
    ) {

      modal.style.display =
        "none";

    }

  }
);


// FECHAR COM ESC

document.addEventListener(
  "keydown",
  function (evento) {

    if (
      evento.key === "Escape"
    ) {

      modal.style.display =
        "none";

    }

  }
);