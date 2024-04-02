function goToEnd() {
    let block = document.getElementById("block");   
    let pos = 0;
  
    block.style.left = pos + 'px';
  }
  
  function goToRight() {
    let block = document.getElementById("block");   
    let pos = 450;
  
    block.style.left = pos + 'px'; 
  }

  function goToCenter() {
    let block = document.getElementsById("block");
    let pos = 225;
    block.style.left = pos + "px";
  }