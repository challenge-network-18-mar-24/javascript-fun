function leggiVoto() {

    let letturaVoti = document.getElementById("letturaVoti");
    let voto = letturaVoti.value;

    if (voto < 4) {
        alert("gravemente insufficiente")
    } else if (voto >= 4 && voto < 6) {
        alert("insufficiente");
    } else if (voto >= 6 && voto < 10) {
        alert("sufficiente");
    

    }

}