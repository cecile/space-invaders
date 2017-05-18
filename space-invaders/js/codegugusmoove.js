var direction = "droite";
var wScreen = window.innerWidth;
var margeGauche = invadersGroup.offsetLeft;
var wInvaders = invadersGroup.offsetWidth;
/*var posGaucheInvaders = parseInt(getComputedStyle(invadersGroup).left);*/
var wMove = wScreen - wInvaders - (margeGauche*2);

var pos = margeGauche;
var id = setInterval(move, 10);
var direction = "droite";


function move(){

  if(direction == "droite"){
        
      if (pos < wMove){
            pos++;
            invadersGroup.style.left = pos + "px";
        }
        else{
            invadersGroup.style.top = invadersGroup.offsetTop + 10 + "px";
            direction = "gauche";
        }

  }else{
        
      if (pos > margeGauche){
            pos--;
            invadersGroup.style.left = pos + "px";
        }
        else{
            invadersGroup.style.top = invadersGroup.offsetTop + 10 + "px";
            direction = "droite";
        }  
   }
}