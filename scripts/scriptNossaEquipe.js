const cards = [...document.querySelectorAll(".card")];
const form = document.querySelector("form");

function criaCard(mensagem, imagem) {
  const fundoDiv = document.createElement("div");
  fundoDiv.setAttribute("class", "fundoDiv");
  document.body.prepend(fundoDiv);

  const div = document.createElement("div");
  div.setAttribute("class", "dados");
  fundoDiv.appendChild(div);

  const x = document.createElement("img");
  x.setAttribute("class", "x_fora");
  x.setAttribute("src", "assets/x_close.png");
  x.addEventListener("click", () => {
    fundoDiv.remove();
  });
  div.appendChild(x);

  const img = document.createElement("img");
  img.setAttribute("class", "imgFora");
  img.setAttribute("src", `assets/${imagem}`);
  div.appendChild(img);

  const p = document.createElement("p");
  p.setAttribute("class", "texto");
  p.innerHTML = mensagem;
  div.appendChild(p);
}

cards.forEach((card, index) => {
  const msgC = "Front End <br> Funções e Back End <br> Responsividade";
  const msgD = "Front End";
  const msgRM =
    "Criação de Ideias <br> Produção de textos <br> Produção completa do vídeo pitch <br> Produção da identidade visual";

  const msgRR =
    "Funções e Back End <br> Front End <br> Colaboração de ideias <br> Revisão de textos";

  let msgs = [msgC, msgD, msgRM, msgRR];
  let imgs = [
    "Caua.png",
    "Daniel.png",
    "RaphaelMachado.png",
    "RaphaelRazori.png",
  ];
  card.addEventListener("click", () => {
    criaCard(msgs[index], imgs[index]);
  });
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
});
