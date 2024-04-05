let categorie = ["disney", "pokemon", "dragonball"];

let elementi = {
  0: ["pippo", "topolino"],
  1: ["pikachu", "bulbasaur"],
  2: ["vegeta", "goku"]
}

// Funzione che crea una card categoria
let creaCategoria = (nomeCategoria, indice) => {
  let divCategoria = document.createElement("div");
  divCategoria.className = "card";
  divCategoria.id = "categoria" + indice

  // Titolo div categoria
  let spanTitolo = document.createElement("span");
  spanTitolo.className = "titolo"
  spanTitolo.innerHTML = nomeCategoria;

  // input elementi categoria 
  let input = document.createElement("input");
  input.id = "input" + indice;

  divCategoria.appendChild(spanTitolo);
  divCategoria.appendChild(input);

  // Append elementi al divCategoria
  elementi[indice].forEach((nomeElemento) => {
    let spanElemento = document.createElement("span");
    spanElemento.innerHTML = nomeElemento;

    divCategoria.appendChild(spanElemento)
  })

  return divCategoria;
}

// Funzione per fare il render delle categorie
let renderCategorie = () => {
  let container = document.getElementById("container");

  container.innerHTML = "";

  categorie.forEach((nomeCategoria, indice) => {
    let divCategoria = creaCategoria(nomeCategoria, indice);
    container.appendChild(divCategoria);
  })
}

renderCategorie();

// Bottone per aggiungere un'altra categoria
let aggiungiCategoria = () => {
  let inputCategoria = document.getElementById("inputCategoria");
  let nomeCategoria = inputCategoria.value;

  categorie.push(nomeCategoria);

  renderCategorie()
}