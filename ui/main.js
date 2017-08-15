console.log('Loaded!');
//new value
var e= document.getElementById('main-text');
e.innerHTML='New value';
//moving img
var img = document.getElementById('madi');
var marginLeft=0;var c=0;
function moveRight(){
  if(c==1000){
      marginLeft= marginLeft-1;
      if(marginLeft===0){
          c=0;
      }
  }
    if(c<1000){
        marginLeft= marginLeft+1;
         c++;
    }
    
    else{
         
    }
    
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function () {
   var interval= setInterval(moveRight, 50);
   
};