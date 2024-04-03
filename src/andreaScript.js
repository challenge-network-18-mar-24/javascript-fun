function verifica() {
  let inputEta = document.getElementById("inputEta");
  let eta = inputEta.value;
  let selectGender = document.getElementById("selectGender");
  let gender = selectGender.value;

if (gender=="" && eta= ""){
alert ("Inserire dati")}
  if else (eta < 3  ) {
    alert("L'ingresso e' gratuito");
  } else if (eta >= 3 && eta < 12  ) {
    alert("L'ingresso e' 5 euro");
  } else if (eta >= 12 && eta < 65 && gender=="m") {
    alert("L'ingresso e' 10 euro");
  } else if (eta >= 12 && eta < 65 && gender=="f") {
    alert("L'ingresso e' 8 euro");
  }else {
    alert("L'ingresso e' 7 euro");
    
  } 
}

/*/////////////////////////////////*/











