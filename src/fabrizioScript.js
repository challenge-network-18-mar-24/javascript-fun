/*function goOne() {
  let myBlock = document.getElementById("myBlock");   
  let pos = 0;

  myBlock.style.left = pos + 'px';
}

function goTwo() {
  let myBlock = document.getElementById("myBlock");   
  let pos = 350;

  myBlock.style.left = pos + 'px'; 
}
/*
function Veta (){
  let myInput = document.getElement ("myInput");
  let eta = myInput.value;

  if (eta < 3)  {
    alert ("l ingresso e' gratuito");
 }
}
/*let veta= eta < 3? "si : no" -------*/
/////////////////////////////////////////
/*
let postiTotali = 100;
let postiPrenotati = 0;

function effettuaPrenotazione() {
    const inputPrenotazione = document.getElementById('numeroPrenotazione');
    const numeroPrenotazione = parseInt(inputPrenotazione.value);

    if (numeroPrenotazione > 0 && numeroPrenotazione <= postiTotali) {
        postiPrenotati += numeroPrenotazione;
        postiTotali -= numeroPrenotazione;
        document.getElementById('postiDisponibili').textContent = postiTotali;
        alert(`Hai prenotato ${numeroPrenotazione} posti! Posti rimanenti: ${postiTotali}`);
    } else {
        alert('Inserisci un numero valido di posti da prenotare.');
    }
}
////////////////////////////////////////////////
*/
let opzioniSx = ["paperino", "topolino"];
let opzioniDx = ["pippo", "pluto"];


let selectDx = document.getElementById("selectDx");
let selectSx = document.getElementById("selectSx");



function spostaDx() {
  let indice = selectSx.value;
  console.log(indice)
  //aggiungi dall array sx
  opzioniDx.push(opzioniSx[indice])
  //togli dall array sx
  opzioniSx.splice(indice, 1);
  generaSelect()

}




function generaSelect() {
  selectDx.innerHTML = "<option value></option>"
  selectSx.innerHTML = "<option value></option>"



  //creazione selct destra
  for (let x = 0; x < opzioniDx.length; x++) {
    let nomeOpzione = opzioniDx[x];
    //crea opzione
    let option = document.createElement("option");
    option.innerHTML = nomeOpzione;
    option.value = x;
    selectDx.appendChild(option);
  }
  //creazione select sinistra
  let x = 0
  while (x < opzioniSx.length) {
    let nomeOpzione = opzioniSx[x];
    //crea opzione
    let option = new Option(nomeOpzione, x);
    selectSx.options.add(option);
    x++;
  }
}
generaSelect()
function spostaSx() { }