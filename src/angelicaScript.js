function getCapoluogo(){
    let inputRegione = document.getElementById("inputRegione");
    let regione = inputRegione.value;

    if (regione == "Campania"){
        alert("Napoli");
    } else if (regione == "Lazio"){
        alert("Roma");
    } else if (regione == "Toscana"){
        alert("Firenze");
    } else if(regione == "Sicilia"){
        alert("Palermo");
    } else if (regione == "Puglia"){
        alert("Bari");
    }

}

function getPrimari(){
    let coloriPrimari = document.getElementById("coloriPrimari");
    let color = coloriPrimari.value;

    if(color == "rosso"){    
       alert("rosso"); 
    }else if(color == "giallo"){
        alert("giallo");
    }else if(color == "blue"){
        alert("blue");
    }
   
  }

  function getSecondari(){
    let coloriSecondari = document.getElementById("coloriSecondari");
    let colore = coloriSecondari.value;

    if(colore == "arancione"){    
       alert("arancione");
    } else if(colore == "verde"){
        alert("verde");
    }else if(colore == "viola"){
        alert("viola");
    }
}
