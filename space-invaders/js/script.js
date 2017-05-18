// click sur le bouton jouer pour accéder à l'écran jeux

var ecranAccueil = document.querySelector(".accueil");
var ecranJeux = document.querySelector(".ecran-jeux");
var ecranPerdu = document.querySelector(".perdu");
var divJeux = document.querySelector(".jeux");


var btnJouer = document.querySelector(".btn-jouer");

btnJouer.addEventListener("click", lancerJeux);

function lancerJeux() {
    ecranAccueil.classList.add("cache");
    ecranJeux.classList.remove("cache");
}

// génère les lignes de gugus méchants ligne par ligne

	//ligne 1 de geek
var ligne1 = document.querySelector(".ligne-1");


for(i = 0 ; i<11 ; i++){
    ligne1.innerHTML += "<div class='blcTeteImage'><img class='gugus' src='images/geek.png' width='60' height='60'></div>";
}                        
    //ligne 2 de roux
var ligne2 = document.querySelector(".ligne-2");


for(i = 0 ; i<11 ; i++){
    ligne2.innerHTML += "<div class='blcTeteImage'><img class='gugus' src='images/roux-2.png' width='60' height='60'></div>";
}
    //ligne 3 blonde
var ligne3 = document.querySelector(".ligne-3");


for(i = 0 ; i<11 ; i++){
    ligne3.innerHTML += "<div class='blcTeteImage'><img class='gugus' src='images/blonde.png' width='60' height='60'></div>";
}
    //ligne 4 black
var ligne4 = document.querySelector(".ligne-4");


for(i = 0 ; i<11 ; i++){
    ligne4.innerHTML += "<div class='blcTeteImage'><img class='gugus' src='images/black.png' width='60' height='60'></div>";
}
    //ligne 5 chinois
var ligne5 = document.querySelector(".ligne-5");
    
for(i = 0 ; i<11 ; i++){
    ligne5.innerHTML += "<div class='blcTeteImage'><img class='gugus' src='images/chinois.png' width='60' height='60'></div>";
}

// on fait apparaitre la seringue tueuse

var seringueTueuse = document.querySelector(".seringue-tueuse");
seringueTueuse.innerHTML += "<img src='images/seringue.png' width='50' >";

// touche gauche et droite pour déplacer la seringue

seringueTueuse.style.left = 600 + "px";

document.addEventListener("keydown", bouge);
document.addEventListener("keyup", tir); 

function bouge() {

	var e = event.keyCode;
    var largeur = document.querySelector('.container');
     
        if (e == 37) { //left function
            seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
	            if (seringueTueuse.getBoundingClientRect().left == largeur.getBoundingClientRect().left){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";

	    		} else if (seringueTueuse.getBoundingClientRect().right == largeur.getBoundingClientRect().right){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
    			}
        } else if (e == 39) { //right function         
            seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";
	            if (seringueTueuse.getBoundingClientRect().left == largeur.getBoundingClientRect().left){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) + 10 + "px";

	    		} else if (seringueTueuse.getBoundingClientRect().right == largeur.getBoundingClientRect().right){
	        		seringueTueuse.style.left = (parseInt(seringueTueuse.style.left)) - 10 + "px";
	    		}       
        }  
}



function tir() {
    var e = event.keyCode;
        if (e == 32){
	        var divPillule = document.querySelector(".divPillule");
	        divPillule.innerHTML += '<img class="pilluleLance" src="images/pillule.png" width="25" height="50">';
	        	
		    var mesPillule = document.querySelectorAll(".pilluleLance");

		    mesPillule[mesPillule.length-1].style.left = seringueTueuse.offsetLeft + seringueTueuse.offsetWidth / 2 + "px";
		    mesPillule[mesPillule.length-1].style.top = seringueTueuse.offsetTop - seringueTueuse.offsetHeight / 2 + "px";
		}			  
} 

// tir 

function myMove() {
	var divPillule = document.querySelector(".divPillule");
	var mesPillule = document.querySelectorAll(".pilluleLance");

	for (i = 0; i < mesPillule.length; i++) {
		var pos = mesPillule[i].offsetTop;
		mesPillule[i].style.top = pos -2 + "px";


	    if (mesPillule[i].offsetTop < parseInt(ecranJeux.getBoundingClientRect().top)) {
 				
				divPillule.removeChild(mesPillule[i]);
		} 
 		
	}
}

setInterval("myMove()", 1); 

function collision(){
	var divPillule = document.querySelector(".divPillule");
	var mesPillule = document.querySelectorAll(".pilluleLance");
	var invader = document.querySelectorAll(".gugus");
	var divTeteGugus = document.querySelectorAll(".blcTeteImage");
	var state = false;


	for(j=0; j<mesPillule.length; j++){

		var tScore = document.querySelector(".textScore")
		var cpt = 0;
	 	 for(i=0; i<invader.length; i++){

			if(parseInt(mesPillule[j].getBoundingClientRect().left) >= parseInt(invader[i].getBoundingClientRect().left)  && (parseInt(mesPillule[j].getBoundingClientRect().left) + parseInt(mesPillule[j].getBoundingClientRect().width)) <= 
			(parseInt(invader[i].getBoundingClientRect().left) + parseInt(invader[i].getBoundingClientRect().width))){
				
				if(parseInt(mesPillule[j].getBoundingClientRect().top) >= parseInt(invader[i].getBoundingClientRect().top)  && (parseInt(mesPillule[j].getBoundingClientRect().bottom) + parseInt(mesPillule[j].getBoundingClientRect().height)) <= 
				(parseInt(invader[i].getBoundingClientRect().bottom) + parseInt(invader[i].getBoundingClientRect().height))){
				
					invader[i].classList.add('cache');
					mesPillule[j].classList.add('cache');
					state = true;

					if (state == true ) {
					cpt = cpt + 10;
					tScore.innerHTML= + " " + cpt;
				}
				}

			} 
	 	}
	}
	
}


setInterval("collision()", 10);  

// tir

// modifier la position de la div qui contient la tête des gugus

var largeur = document.querySelector('.container');
var divTete = document.querySelector(".blc-lignes");
var direction = "droite";
// var wContainer = largeur.offsetWidth;
// var RContainer = largeur.getBoundingClientRect().right;
// console.log("largeur  droite" + RContainer);
// var LContainer = largeur.getBoundingClientRect().left;
// console.log("largeur gauche" +LContainer);
var margeDroite = divTete.getBoundingClientRect().right;
console.log("div tete droite" +margeDroite);
var margeGauche = divTete.getBoundingClientRect().left;
console.log("div tete gauche" +margeGauche);
var epaisseurDivTete = divTete.getBoundingClientRect().width;
console.log("div tete epaisseur" +epaisseurDivTete);
// var aGauche = LContainer + epaisseurDivTete;
// console.log("agauche" +aGauche);
var posD = margeDroite;
var id = setInterval(descendre, 20);



function descendre(){

  if(direction == "droite"){
        
      if (posD < 300){
            posD++;
            divTete.style.left = posD + "px";
        }
        else{
            divTete.style.top = divTete.offsetTop + 10 + "px";
            direction = "gauche";
        }

  } else{
        
      if (posD > -40){
            posD--;
            divTete.style.left = posD + "px";
        }
        else{
            divTete.style.top = divTete.offsetTop + 10 + "px";
            direction = "droite";
        }  
   }
}


var reJouer = document.querySelector(".btn-rejouer");

reJouer.addEventListener("click", lancerRejouer);
   
function lancerRejouer() {
  ecranPerdu.classList.add("cache");
  ecranJeux.classList.remove("cache");
}

// barre d'espace lance/tire des pillules

// quand la pillule touche une tete elle disparait/explose

// barre d'espace lance/tire des pillules

// quand la pillule touche une tete elle disparait/explose



