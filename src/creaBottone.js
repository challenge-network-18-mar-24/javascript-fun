creaBottone = (testo, azione, colore = "yellow") => {
    //crea button per aggiungere elemento
    let button = document.createElement("button");
    button.innerHTML = testo;
    button.onclick = azione;
    button.style.backgroundColor = colore;
    button.style.color = "white";

    return button;
}