
function goToStart() {
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
}