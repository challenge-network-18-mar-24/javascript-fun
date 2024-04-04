function creaBlocco (){
    let myContainer= document.getElementById("myContainer");
    let numeroBlocchi = document.getElementById("numeroBlocchi").value;

    let numero = 0;
    while(numero < numeroBlocchi ){
        let blocco = document.createElement("div");
        blocco.id = "blocco" + (numero + 1);

        blocco.style.backgroundColor=  numero % 2 == 0 ? "pink":"brown";
        blocco.className="blocco"

        myContainer.appendChild(blocco);

        numero++


    } 
   
}