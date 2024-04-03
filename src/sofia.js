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




/* function goToStart() {
    let myBlock = document.getElementById("myBlock");   
    let pos = 0;
    
    myBlock.style.transition = "all 2s";
    myBlock.style.left = pos + 'px';
    if(myContainer){
        myContainer.style.background="green"
        }
}
  
  function goToMedium() {
    let myBlock = document.getElementById("myBlock");   
    let pos = 175;
    
    myBlock.style.transition = "all 5s";
    myBlock.style.left = pos + 'px'; 
    if(myContainer){
        myContainer.style.background="yellow"
        }
}
  
  
  function goToEnd() {
    let myBlock = document.getElementById("myBlock");   
    let pos = 350;
    let changecolor = true
    myBlock.style.transition = "all 10s";
    myBlock.style.left = pos + 'px'; 
    if(myContainer){
    myContainer.style.background="red"
    }
} */