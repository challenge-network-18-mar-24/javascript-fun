let categories = [];
let elements = {};

// Funzione che crea una card categoria
let createCategory = (categoryName, i) => {
    let divCategory = document.createElement("div");
    divCategory.className = "card";
    divCategory.id = "category" + i

    // Titolo div categoria
    let spanTitle = document.createElement("span");
    spanTitle.className = "title"
    spanTitle.innerHTML = categoryName;

	// Close Button
	let closeBtn = document.createElement("button")
	closeBtn.className = "closeBtn"
	closeBtn.onclick = () => deleteEl('category', i)

    // input elements categoria 
    let input = document.createElement("input");
    input.id = "input" + i;

    // crea button per aggiungere elemento
    let button = document.createElement("button");
    button.innerHTML = "Aggiungi elemento";
	button.className = "btn"
    button.onclick = () => addElement(i);

    divCategory.appendChild(spanTitle);
    divCategory.appendChild(closeBtn);
    divCategory.appendChild(input);
    divCategory.appendChild(button);

    // Append elements al divCategory
    elements[i].forEach((elementName, j) => {
		let element = document.createElement("div");
        let spanElement = document.createElement("span");
		if (elementName === '') return;

		let redCross = document.createElement("button");

		element.className = "divElement"
		spanElement.innerHTML = elementName;
		redCross.className = "btn redCross"
		redCross.onclick = deleteEl('element', i, j)

		element.appendChild(spanElement);
		element.appendChild(redCross);
        divCategory.appendChild(element);
    })

	return divCategory;
}

// Funzione per fare il render delle categorie
let renderCategories = () => {
	let container = document.getElementById("container");

	container.innerHTML = "";

	console.log('patata')
	categories.forEach((categoryName, i) => {
		let divCategory = createCategory(categoryName, i);
		container.appendChild(divCategory);
	})
}

renderCategories();

// Funzione per aggiungere un'altra categoria
let addCategory = () => {
	let inputCategory = document.getElementById("inputCategory");
	let categoryName = inputCategory.value;
	if (categoryName === '') return

	categories.push(categoryName);
	let last = categories.length - 1 
	elements[last] = [];

	renderCategories();
}

// Funzione per aggiungere un nuovo elemento
let addElement = (i) => {
	let inputElement = document.getElementById("input" + i);
	let elementName = inputElement.value;
	elements[i].push(elementName);

	renderCategories();
	console.log('banana')
}

let deleteEl = (type, category = null, i) => {
	switch (type) {
		case 'category':
			categories.splice(i, 1)
		case 'element':
			elements[category].splice(i, 1)
	}

}