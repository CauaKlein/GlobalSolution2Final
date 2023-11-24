const topoMortalidadeInfantilListButton = document.querySelector(
  ".topoMortalidadeInfantilListButton"
);

let causas = [
  "Doenças infecciosas, como pneumonia",
  "Infecções neonatais",
  "Doenças respiratórias",
  "Exposição a produtos tóxicos.",
];

let i = 0;

function addCausa(causa) {
  const topoMortalidadeInfantilListItens = document.querySelector(
    ".topoMortalidadeInfantilListItens"
  );

  const li = document.createElement("li");
  li.innerHTML = causa;

  if (i < 4) {
    topoMortalidadeInfantilListItens.appendChild(li);
    i++;
  } else {
    topoMortalidadeInfantilListItens.appendChild(li);
    li.innerHTML = "Malformações congênitas";
    topoMortalidadeInfantilListButton.remove();
  }
}

topoMortalidadeInfantilListButton.addEventListener("click", () =>
  addCausa(causas[i])
);
