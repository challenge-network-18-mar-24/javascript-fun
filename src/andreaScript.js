/*
function creaBlocco() {
  let myContainer = document.getElementById("myContainer");
  let numeroBlocchi = document.getElementById("numeroBlocchi").value;

  for (let numero = 0; numero < numeroBlocchi; numero++) {
    let blocco = document.createElement("div");
    blocco.id = "blocco" + (numero + 1);
    blocco.className = "blocco blocco-rosso";

    myContainer.appendChild(blocco);
  }
} 
*/
/*
function creaBlocco() {
  let myContainer = document.getElementById("myContainer");
  let numeroBlocchi = document.getElementById("numeroBlocchi").value;

  for (let numero = 0; numero < numeroBlocchi; numero++) {
    let blocco = document.createElement("div");
    blocco.id = "blocco" + (numero + 1);
    blocco.className = "blocco blocco-rosso";

    myContainer.appendChild(blocco);
  }
}

function coloreBlocco() {
  let myContainer = document.getElementById("myContainer");
  let coloreBlocchi = document.getElementById("coloreBlocchi").value;
  let blocco = document.createElement("div");
  blocco.id = "blocco" + (numero + 1);

  switch (coloreBlocchi) {
    case "red":
      if (coloreBlocchi == 0);
      blocco.className = "blocco blocco-rosso";
      break;

    case "blu":
      if (coloreBlocchi == 1);
      blocco.className = "blocco blocco-blu";
      break;

    case "giallo":
      if (coloreBlocchi == 2);
      blocco.className = "blocco blocco-giallo";
      break;

    case "verde":
      if (coloreBlocchi == 3);
      blocco.className = "blocco blocco-verde";
      break;

    default:
      text = "No value found";
  }
  myContainer.appendChild(blocco);
} */

function coloreBlocco() {
  let myContainer = document.getElementById("myContainer");
  let coloreBlocchi = document.getElementById("coloreBlocchi").value;
  let numeroBlocchi = document.getElementById("numeroBlocchi").value;


  switch (coloreBlocchi) {
    case "red":
      if (coloreBlocchi == 0) {
        for (let numero = 0; numero < numeroBlocchi; numero++) {
          let blocco = document.createElement("div");
          blocco.id = "blocco" + (numero + 1);
          blocco.className = "blocco blocco-rosso";

          myContainer.appendChild(blocco);
        }
      }
      break;

    case "blu":
      if (coloreBlocchi == 1) {
        for (let numero = 0; numero < numeroBlocchi; numero++) {
          let blocco = document.createElement("div");
          blocco.id = "blocco" + (numero + 1);
          blocco.className = "blocco blocco-blu";

          myContainer.appendChild(blocco);
        }
      }
      break;

    case "giallo":
      if (coloreBlocchi == 2) {
        for (let numero = 0; numero < numeroBlocchi; numero++) {
          let blocco = document.createElement("div");
          blocco.id = "blocco" + (numero + 1);
          blocco.className = "blocco blocco-giallo";

          myContainer.appendChild(blocco);
        }
      }
      break;

    case "verde":
      if (coloreBlocchi == 3) {
        for (let numero = 0; numero < numeroBlocchi; numero++) {
          let blocco = document.createElement("div");
          blocco.id = "blocco" + (numero + 1);
          blocco.className = "blocco blocco-verde";

          myContainer.appendChild(blocco);
        }
      }
      break;

    default:
      for (let numero = 0; numero < numeroBlocchi; numero++) {
        let blocco = document.createElement("div");
        blocco.id = "blocco" + (numero + 1);
        blocco.className = "blocco blocco-rosso";

        myContainer.appendChild(blocco);
      }
  }


}
