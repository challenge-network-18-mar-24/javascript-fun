function verificaCittà() {
  let mioInput = document.getElementById("mioInput");
  let città = mioInput.value;

  if (città = Roma) {
    alert("Regione Lazio");
  } else if (eta >= 3 && eta < 12) {
    alert("L'ingresso e' 5 euro");
  } else if (eta >= 12 && eta < 65) {
    alert("L'ingresso e' 10 euro");
  } else {
    alert("L'ingresso e' 7 euro");
  }
}