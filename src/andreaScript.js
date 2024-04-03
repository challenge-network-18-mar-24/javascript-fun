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
