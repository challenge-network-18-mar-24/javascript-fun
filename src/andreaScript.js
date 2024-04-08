let categorie = [];
let elementi = {}

// Funzione per fare il render delle categorie
let renderCategorie = () => {
  let container = document.getElementById("container");

  container.innerHTML = "";

  categorie.forEach((nomeCategoria, indice) => {
    let elementiCategoria = elementi[indice];
    let divCategoria = creaCategoria(nomeCategoria, indice, elementiCategoria);
    container.appendChild(divCategoria);
  })
}

//Funzione per aggiungere un'altra categoria
let aggiungiCategoria = () => {
  let inputCategoria = document.getElementById("inputCategoria");
  let nomeCategoria = inputCategoria.value;

  categorie.push(nomeCategoria);
  let ultimoIndice = categorie.length - 1;
  elementi[ultimoIndice] = [];

  renderCategorie();
}


//Funzione per aggiungere un nuovo elemento
let aggiungiElemento = (indice) => {
  let inputElemento = document.getElementById("input" + indice);
  let nomeElemento = inputElemento.value;
  elementi[indice].push(nomeElemento);

  renderCategorie();
}

/* Bottone per aggiungere un'altra categoria
let aggiungiCategoria = () => {
  let inputCategoria = document.getElementById("inputCategoria");
  let nomeCategoria = inputCategoria.value;

  categorie.push(nomeCategoria);

  renderCategorie()
} */

renderCategorie();