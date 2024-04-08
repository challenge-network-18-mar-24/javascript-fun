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

    let azioneBottone = () => aggiungiElemento(indice)
    let button = creaBottone("aggiungi elemento", azioneBottone);

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

// crea button per aggiungere elemento
let button = document.createElement("button");
button.innerHTML = "aggiungi elemento";
button.onclick = () => aggiungiElemento(indice);

divCategoria.appendChild(spanTitolo);
divCategoria.appendChild(input);
divCategoria.appendChild(button);