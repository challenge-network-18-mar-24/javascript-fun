function goToStart() {
  let myBlock = document.getElementById("myBlock");
  let pos = 0;
  myBlock.style.top = "0px";
  myBlock.style.left = pos + 'px';
  console.log(pos);
}

function goToEnd() {
  let myBlock = document.getElementById("myBlock");
  let pos = 350;
  myBlock.style.top = "0px";
  myBlock.style.left = pos + 'px';
}

function jumpS() {
  let myBlock = document.getElementById("myBlock");
  let pos = 350;
  let altezza = 0;
  myBlock.style.top = "0px";
  myBlock.style.left = pos + 'px';

  let intervalID = setInterval(() => {
    if (pos > 0) {
      if (pos > 215) {
        altezza += 50;
        myBlock.style.top = altezza + 'px';
      } else if (pos < 170) {
        altezza -= 50;
        myBlock.style.top = altezza + 'px';
      }

      myBlock.style.left = (pos - (350 / 7)) + 'px';
      pos -= (350 / 7);
      console.log("nonlol" + pos);
      if (pos == 0) {
        clearInterval(intervalID);

      }
    }
  }, "500");
}
function jumpE() {
  let myBlock = document.getElementById("myBlock");
  let pos = 0;
  let altezza = 0;
  myBlock.style.top = "0px";
  myBlock.style.left = pos + 'px';
  let flagEnd = 0;
  let intervalID2 = setInterval(() => {
    if (pos < 350 && flagEnd == 0) {
      if (pos < 105) {
        altezza += 50;
        myBlock.style.top = altezza + 'px';
      } else if (pos > 175) {
        altezza -= 50;
        myBlock.style.top = altezza + 'px';
      }
      myBlock.style.left = (pos + (350 / 7)) + 'px';
      pos += (350 / 7);
      console.log("lol" + pos);
      if (pos == 350) {
        clearInterval(intervalID2);
      }
    }
  }, "500");
}
function jumpEnd(eta) {
  let myBlock = document.getElementById("myBlock");
  let pos = 0;
  let altezza = 0;
  myBlock.style.top = "0px";
  myBlock.style.left = pos + 'px';
  let flagEnd = 0;
  let intervalID2 = setInterval(() => {
    if (pos < 350 && flagEnd == 0) {
      if (pos < 105) {
        altezza += 50;
        myBlock.style.top = altezza + 'px';
      } else if (pos > 175) {
        altezza -= 50;
        myBlock.style.top = altezza + 'px';
      }
      myBlock.style.left = (pos + (350 / 7)) + 'px';
      pos += (350 / 7);
      console.log("lol" + pos);
      if (pos == 350) {
        flagEnd = 1;
        jumpStart(eta);
        clearInterval(intervalID2);
      }
    }
  }, "500");
}
function jumpStart(eta) {
  let myBlock = document.getElementById("myBlock");
  let pos = 350;
  let altezza = 0;
  myBlock.style.top = "0px";
  myBlock.style.left = pos + 'px';

  let intervalID = setInterval(() => {
    if (pos > 0) {
      if (pos > 215) {
        altezza += 50;
        myBlock.style.top = altezza + 'px';
      } else if (pos < 170) {
        altezza -= 50;
        myBlock.style.top = altezza + 'px';
      }

      myBlock.style.left = (pos - (350 / 7)) + 'px';
      pos -= (350 / 7);
      console.log("nonlol" + pos);
      if (pos == 0) {
        cambiaColore(eta);
        clearInterval(intervalID);

      }
    }
    //console.log("stampa uwu");
    //break;
    //if(pos == 0){jumpEnd();}
  }, "500"); console.log("funzione finita");
  return intervalID;
}
function verificaEta() {
  let mioInput = document.getElementById("inputEta");
  let eta = mioInput.value;
  jumpEnd(eta);
}

function cambiaColore(eta) {

  //jumpEnd(eta);

  myBlock.style.backgroundColor = eta <= 3 ? "blue" : (eta < 12 ? "green" : (eta >= 12 && eta < 65 ? "orange" : "black"));

  console.log("ciao" + eta);
  //  jumpEnd();
}
function comandaColore() {
  let mioInput = document.getElementById("inputColors");
  let colore = mioInput.value;
  console.log(mioInput.value);
  if (colore == "arancio") {
    myBlock.style.backgroundColor = "orange";
  }
  if (colore == "verde") {
    myBlock.style.backgroundColor = "green";
  }
  if (colore == "blu") {
    myBlock.style.backgroundColor = "blue";
  }
  if (colore == "grigio") {
    myBlock.style.backgroundColor = "grey";
  }
  if (colore == "nero") {
    myBlock.style.backgroundColor = "black";
  }
  if (colore == "rosa") {
    myBlock.style.backgroundColor = "pink";
    console.log(myBlock.style.backgroundColor);
  }

}
/*
function jump(){
  return myBlock.style.left = pos - 350/5 + 'px';
}*/