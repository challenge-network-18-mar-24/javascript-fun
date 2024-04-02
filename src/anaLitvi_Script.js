function verificaEta() {
  let myEdge = document.getElementById("myEdge");
  let eta = myEdge.value;


  
  if (eta =="") 
  {alert("Non definito");
  }else if (eta < 3) {
    alert("Infante");
  } else if (eta >= 3 && eta < 12) {
    alert("Bambino");
  } else if (eta >= 12 && eta < 18) {
    alert("Adolescente");
  } else if (eta >= 18 && eta < 55) {
    alert("Adulto");
  } else if (eta >= 55 && eta < 75) 
  {alert("Maturo");
  } else {
    alert("Persona");
  }
}

/*----------------------------------*/

function verificaCitta() {
  let myCountry = document.getElementById("myCountry");
  let citta = myCountry.value;

  console.log(citta)
  
  if (citta == "") {
    alert("Non Definito");
  }else if (citta == Roma) {
    alert("Centro Italia, Lazio");
  } else if (citta == Milano) {
    alert("Nord Italia, Lombardia");
  } else if (citta == Napoli) {
    alert("Sud Italia, Campania");
  } else {
    alert("Italia");
  }
}

function getRegion(){
  let regionIt = document.getElementById("regionIt");

  console.log(citta);
}
/*----------------------------------

function getElementById(){
  let demo = document .getElementById("demo");
  let id = demo;

  demo.style.display='none'
  
}
*/