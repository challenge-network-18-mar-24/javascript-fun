function leggiVoto() {
    let myContainer= document.getElementById("myContainer");
    let letturaVoti = document.getElementById("letturaVoti");
   
     
    for (let numero=0; numero <4; numero ++);
        if(numero <4){
            alert("gravemente insufficiente")
        } else if (numero >=4 && numero <6){
            alert("insufficiente");
        } else {
            alert("sufficiente");
        }


    myContainer.appendChild(letturaVoti);

    
    

}