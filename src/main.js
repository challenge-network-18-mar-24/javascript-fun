let optionRight = ["Paperino", "Topolino", "Pippo"];
let optionLeft = ["Pluto", "Clarabella", "Eta Beta"];

let selectRight = document.getElementById("selectRight");
let selectLeft = document.getElementById("selectLeft");

function createSelect() {
    selectRight.innerHTML = "<option value=''></option>";
    selectLeft.innerHTML = "<option value=''></option>";

    // Creazione select a destra
    for (let x = 0; x < optionRight.length; x++) {
        let nomeOpzione = optionRight[x];

        // Crea opzione
        let option = document.createElement("option");
        option.innerHTML = nomeOpzione;
        option.value = x;

        // Aggungi opzione alla select
        selectRight.appendChild(option);
  	}

	// Creazione select a sinistra
	let x = 0;
	while (x < optionLeft.length) {
		let nomeOpzione = optionLeft[x];

		// Crea opzione
		let option = new Option(nomeOpzione, x);

		// Aggungi opzione alla select
		selectLeft.options.add(option);
		x++
	}
}

createSelect();

function moveRight() {
	if (selectLeft.value == '') return
	let i = selectLeft.value;
	let optionName = optionLeft[i]

	// aggiungi all'array lato dx
	optionRight.push(optionName);

	// togli dall'array lato sx
	optionLeft.splice(i, 1); 

	createSelect();
}

function moveLeft() {
	if (selectRight.value == '') return
	let i = selectRight.value;
	let optionName = optionRight[i]

	// aggiungi all'array lato dx
	optionLeft.push(optionName);

	// togli dall'array lato sx
	optionRight.splice(i, 1); 

	createSelect();
}