console.log('Loaded!');

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
 img.style.marginLeft=marginLeft+'px';
}
img.onclick = function () {
   var interval= setInterval(moveRight, 50);
   
};
var counter=0;
var button = document.getElementById('b1');
b1.onclick= function(){
  counter++;
  var span = document.getElementById('sp');
  span.innerHTML=counter.toString();
};