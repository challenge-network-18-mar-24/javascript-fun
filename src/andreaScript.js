let opzioniDx = ["Paperino", "Topolino", "Pippo"];
let opzioniSx = ["Pluto", "Clarabella", "Eta Beta"];

let selectDx = document.getElementById("selectDx");
let selectSx = document.getElementById("selectSx");

function generaSelect() {
  selectDx.innerHTML = "<option value=''></option>";
  selectSx.innerHTML = "<option value=''></option>";

  // Creazione select a destra
  for (let x = 0; x < opzioniDx.length; x++) {
    let nomeOpzione = opzioniDx[x];

    // Crea opzione
    let option = document.createElement("option");
    option.innerHTML = nomeOpzione;
    option.value = x;

    // Aggungi opzione alla select
    selectDx.appendChild(option);
  }

  // Creazione select a sinistra
  let x = 0;
  while (x < opzioniSx.length) {
    let nomeOpzione = opzioniSx[x];

    // Crea opzione
    let option = new Option(nomeOpzione, x);

    // Aggungi opzione alla select
    selectSx.options.add(option);
    x++
  }
}

generaSelect();

function spostaDx() {
  let indice = selectSx.value;
  let nomeOpzione = opzioniSx[indice]

  // aggiungi all'array lato dx
  opzioniDx.push(nomeOpzione);

  // togli dall'array lato sx
  opzioniSx.splice(indice, 1);

  generaSelect();
}

function spostaSx() {
  let indice = selectDx.value;
  let nomeOpzione = opzioniDx[indice]

  // aggiungi all'array lato sx
  opzioniSx.push(nomeOpzione);

  // togli dall'array lato dx
  opzioniDx.splice(indice, 1);

  generaSelect();

}