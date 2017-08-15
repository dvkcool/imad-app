console.log('Loaded!');
//new value
var e= document.getElementById('main-text');
e.innerHTML='New value';
//moving img
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft+1;
    if(marginLeft>1000)
    marginLeft=10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function () {
   var interval= setInterval(moveRight,100);
   
};