function goOne() {
    let myBlock = document.getElementById("myBlock");
    let pos = 0;

    myBlock.style.left = pos + 'px';
}

function goTwo() {
    let myBlock = document.getElementById("myBlock");
    let pos = 350;

    myBlock.style.left = pos + 'px';
}

function Veta() {
    let myInput = document.getElementById("myInput");
    let eta = myInput.value;

    if (eta < 3) {
        alert("L'ingresso è gratuito");
    }
}

let veta = eta < 3 ? "si" : "no";
