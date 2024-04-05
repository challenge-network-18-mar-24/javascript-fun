let categorie = [];
let elementi = {}

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

  // crea button per aggiungere elemento
  let button = document.createElement("button");
  button.innerHTML = "Aggiungi elemento";
  button.onclick = () => aggiungiElemento(indice);

  divCategoria.appendChild(spanTitolo);
  divCategoria.appendChild(input);
  divCategoria.appendChild(button);

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

// Funzione per aggiungere un'altra categoria
let aggiungiCategoria = () => {
  let inputCategoria = document.getElementById("inputCategoria");
  let nomeCategoria = inputCategoria.value;

  categorie.push(nomeCategoria);
  let ultimoIndice = categorie.length - 1 
  elementi[ultimoIndice] = [];

  renderCategorie();
}

// Funzione per aggiungere un nuovo elemento
let aggiungiElemento = (indice) => {
  let inputElemento = document.getElementById("input" + indice);
  let nomeElemento = inputElemento.value;
  elementi[indice].push(nomeElemento);

  renderCategorie();
}