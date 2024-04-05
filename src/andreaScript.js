let categorie = ["diney", "pokemon", "dragonball"];

let elementi = {
  0: ["pippo", "topolino"],
  1: ["pikachu", "bulbasaur"],
  2: ["vegeta", "goku"]
}

let renderCategorie = () => {
  let container = document.getElementById("container");

  container.innerHTML = "";

  categorie.forEach((nomeCategoria, indice) => {
    let divCategoria = document.createElement("div");
    
    // Titolo div categoria
    let spanTitolo = document.createElement("span");
    spanTitolo.innerHTML = nomeCategoria;
    
    // input elementi categoria 
    let input = document.createElement("input");
    input.id = "input" + indice;

    divCategoria.appendChild(spanTitolo);
    divCategoria.appendChild(input);

    container.appendChild(divCategoria);
  })
}

renderCategorie();

let aggiungiCategoria = () => {
  let inputCategoria = document.getElementById("inputCategoria");
  let nomeCategoria = inputCategoria.value;

  categorie.push(nomeCategoria);

  renderCategorie()
}
