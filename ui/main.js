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
var button = document.getElementById('b1');
b1.onclick= function(){
    var request= new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status==200){
                var counter = request.responseText;
               var span = document.getElementById('sp');
               span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET', 'divyanshukumarg.imad.hasura-app.io/counter', true );
    request.send(null);
  
};