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
var i=0;
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
    request.open('GET', '/counter', true );
    request.send(null);
  
};
var nameInput = document.getElementById('name');
var name1 = nameInput.value;
var submit = document.getElementById('submit');
submit.onclick= function(){
  var names =['name1', 'name2', 'name3', 'name4'];
  var list='';
  for(var i=0; i<names.length; i++){
      list=list+'<li>'+names[i]+'</li>';
  }
  var ul = document.getElementById('l1');
  ul.innerHTML=list;
};










