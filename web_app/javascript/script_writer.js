
console.log("load script_writer ...");

/* Permet d'ouvrir une nouvelle fenêtre au milieu de l'écran
* à l'url indiqué
*/
function popupwindow(url, title, w, h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 

/* ===================================
*  Getter et Setter setCaractere :
*  Poste et recupere un caractere en chinois
*  ===================================
*/
function setCaractere(c){
	sessionStorage.setItem('currentCharacter',c);
}
function getCaractere(){
	let c = sessionStorage.getItem('currentCharacter');
	if(c==null){
		return 'none';
	}else{
		return c;
	}
}

/* Permet de définir l'ouverture du caractère au clique 
*/
function writeCharacter(c){
	console.log("Call writeCharacter : "+c);

	//Enregistre le caractère actuel dans les variables sessions
	setCaractere(c);
	
	//Ouvre un popup window
	popupwindow('writeWindow.html', 'Titre', 440, 540);  
}

var writer;

/* Ecrit le caractère dans la balise indiquée
*/
function writeInside(target){
	let c = getCaractere();
	writer = HanziWriter.create(target, c, {
  		width: 200,
  		height: 200,
  		padding: 0,
  		strokeColor: '#0d0d0d',
	});
	//writer.loopCharacterAnimation();
	
	var event = document.getElementById('animate-button');
	if(event){
		event.addEventListener('click', function() {
  		writer.animateCharacter();
		});
	}
}

function quizz(target){
	writer.showCharacter = false;

	writer.quiz();
}

let isRadical = false;

function afficheRadical(target){
	console.log("affiche radical");

	if(!isRadical){
		writer.updateColor('radicalColor','#ff4d4d');
		isRadical = true;
	}else{
		writer.updateColor('radicalColor','#000000');
		isRadical = false;
	}
	

}
