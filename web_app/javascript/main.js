

/* ===================================
*  Classe Vocabulaire :
*  ===================================
*/
class Vocabulaire{
	constructor(caractere,pinyin,traduction){
		this.caractere = caractere;
		this.pinyin = pinyin;
		this.traduction = traduction;
	}
	affiche(){
		//La virgule ajoute un espace, le '+' non
		console.log("Caractere :",this.caractere+", Pinyin :",this.pinyin+", Traduction :",this.traduction)
	}

}

//let voc1 = new Vocabulaire("岛","dǎo","île");
//voc1.affiche();

/* ===================================
*  Classe Lecon :
*  Contient des objets Vocabulaire
*  ===================================
*/
class Lecon{
	constructor(idLecon){
		this.id=idLecon;

		switch (idLecon){
			case 0:
				this.title="Les nombres";
				this.liste=[
					new Vocabulaire("零","líng","0"),
					new Vocabulaire("一","yī","1"),
					new Vocabulaire("二","èr","2"),
					new Vocabulaire("三","sān","3"),
					new Vocabulaire("四","sì","4"),
					new Vocabulaire("五","wǔ","5"),
					new Vocabulaire("六","liù","6"),
					new Vocabulaire("七","qī","7"),
					new Vocabulaire("八","bā","8"),
					new Vocabulaire("九","jiǔ","9"),
					new Vocabulaire("十","shí","10"),
					new Vocabulaire("一百","yī bǎi","100"),
					new Vocabulaire("一千","yī qiān","1.000"),
					new Vocabulaire("一万","yī wàn","10.000"),
					new Vocabulaire("一百万","yī bǎi wàn","1.000.000"),
					new Vocabulaire("十一","shí yī","11"),
					new Vocabulaire("三十五","sān shí wǔ","35"),
					new Vocabulaire("一百一十","yī bǎi yī shí","110"),
					new Vocabulaire("一千五百三十","yī qiān wǔ bǎi sān shí","1530"),
					new Vocabulaire("十五万","shí wǔ wàn","150.000")
				];
				break;
			case 1:
				this.title="Se saluer, nom et nationalité";
				this.liste=[
					new Vocabulaire("你好","nǐ hǎo","Bonjour"),
					new Vocabulaire("你们好","nǐ men hǎo","Bonjour (vous)"),
					new Vocabulaire("再见","zài jiàn","Au revoir"),
					new Vocabulaire("我","wǒ","Je/moi"),
					new Vocabulaire("很","hěn","Très"),
					new Vocabulaire("髙兴","gāo xīng","Heureux"),
					new Vocabulaire("认识","rèn shí","Connaître"),
					new Vocabulaire("叫","jiào","S'appeler"),
					new Vocabulaire("名字","míng zì","Nom/prénom"),
					new Vocabulaire("呢","ne","Particule")
				];
				break;
			case 2:
				this.title="La Chine et le chinois";
				this.liste=[
					new Vocabulaire("汉语","hàn yǔ","Chinois"),
					new Vocabulaire("中文","zhōng wén","Chinois"),
					new Vocabulaire("英语","yīng yǔ","Anglais parlé"),
					new Vocabulaire("日语","rì yǔ","Japonais parlé"),
					new Vocabulaire("法语","fǎ yǔ","Français parlé"),
					new Vocabulaire("法国","fǎ guó","France"),
					new Vocabulaire("法国人","fǎ guó rén","Français(e)"),
					new Vocabulaire("日本","rì běn","Japon"),
					new Vocabulaire("英国","yīng guó","Angleterre"),
					new Vocabulaire("中国","zhōng guó","Chine"),
					new Vocabulaire("中国人","zhōng guó rén","Chinois(e)"),
					new Vocabulaire("太","tài","Trop"),
					new Vocabulaire("大","dà","Grand"),
					new Vocabulaire("小","xiǎo","Petit"),
					new Vocabulaire("难","nán","Difficile"),
					new Vocabulaire("老师","lǎo shī","Enseignant(e)"),
					new Vocabulaire("学生","xué shēng","Etudiant(e)")
				];
				break;
			default:
				console.log("Erreur : idLecon erroné");
		}
	}
	//Affiche le vocabulaire de la liste
	affiche(){
		console.log("Leçon "+this.id+" : "+this.title+" : ");
		for(let i=0;i<this.liste.length;i++){
			//console.log("i = "+i);
			this.liste[i].affiche();
		}
	}
}

//let lecon1 = new Lecon(1);
//lecon1.affiche();

/* ===================================
*  Classe Lecons :
*  Contient des objets Lecon
*  ===================================
*/
class Lecons{
	constructor(){
		this.liste=[
			new Lecon(0),
			new Lecon(1),
			new Lecon(2)
		]
	}
	affiche(){
		for(let i=0;i<this.liste.length;i++){
			this.liste[i].affiche();
		}
	}

}

let lecons = new Lecons();
//lecons.affiche();

/* ===================================
*  Fonction creerBoutonsLecons :
*  Permet de générer les boutons des leçons
*  ===================================
*/
function creerBoutonsLecons(){

	let leconArray = new Array(lecons.liste.length);

	for(let i=0;i<lecons.liste.length;i++){
		leconArray[i] = document.createElement("li");
		leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon"+(i)+"\" href=\"leconPanel.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
		//leconArray[i].innerHTML = "<a id=\"Lecon"+(i+1)+"\" href=\"leconPanel.html\">Leçon "+(i+1)+" : "+lecons.liste[i].title+"</a></li>";
		document.getElementById("listeBtn").appendChild(leconArray[i]);
	}

}
 
//creerBouttonsLecons();

/* ===================================
*  Getter et setter choixLecon :
*  Permet de créer une variable session correspondante a l'ID d'une leçon
*  ===================================
*/
function setChoixLecon(num){
	sessionStorage.setItem('choixLecon',num);
}
function getChoixLecon(){
	let a = sessionStorage.getItem('choixLecon')
	//console.log("choixLecon = "+a);
	return a;
}

/* ===================================
*  Getter et setter choixVoc :
*  Permet de créer une variable session correspondante a l'ID d'un vocabulaire
*  ===================================
*/
function setChoixVoc(num){
	sessionStorage.setItem('choixVoc',num);
}
function getChoixVoc(){
	let b = sessionStorage.getItem('choixVoc')
	//console.log("choixVoc = "+b);
	return b;
}

/* ===================================
*  Fonction boutonSuivant :
*  Passe à la page suivante
*  ===================================
*/
function boutonSuivant(){
	let c=parseInt(getChoixVoc())+1;
	setChoixVoc(c);
}
function boutonPrecedent(){
	let d=parseInt(getChoixVoc())-1;
	setChoixVoc(d);
}

/* ===================================
*  Fonction cssHidden :
*  Permet de cacher les boutons Precedent et Suivant
*  ===================================
*/
function cssHidden(){
	idVoc=getChoixVoc();
	console.log("choixVoc = "+idVoc);
	console.log("length = "+lecons.liste[idLecon].liste.length);
	if(idVoc<1){
		document.getElementById("Precedent").style.visibility = "hidden";
		document.getElementById("Retour").style.visibility = "visible";
	}
	if(idVoc>=lecons.liste[idLecon].liste.length-1){
		document.getElementById("Suivant").style.visibility = "hidden";
		document.getElementById("Terminer").style.visibility = "visible";
	}
}

/* ===================================
*  Fonction creerPagination :
*  Creer la pagination en pied de page
*  ===================================
*/
function creerPagination(){
	idLecon=getChoixLecon();
	idVoc=parseInt(getChoixVoc());

	page = document.createElement("p");
	page.innerHTML = (idVoc+1)+"/"+lecons.liste[idLecon].liste.length;
	document.getElementById("Pagination").appendChild(page);
}


/* ===================================
*  Fonction creerTitreLecon :
*  Permet de générer un titre en fonction du choix de la leçon
*  ===================================
*/
function creerTitreLecon(){
	id=getChoixLecon(); 

	titre = document.createElement("h2");
	titre.innerHTML = "Leçon "+lecons.liste[id].id+" : "+lecons.liste[id].title;
	document.getElementById("TitreLecon").appendChild(titre);
}


/* ===================================
*  Fonction creerVocLecon :
*  Permet de générer les symboles, le pinyin et la traduction du panel Lecon
*  ===================================
*/
function creerVocLecon(){
	idLecon=getChoixLecon();
	idVoc=getChoixVoc();
	//console.log("choixLecon = "+idLecon);
	//console.log("choixVoc = "+idVoc);
	lecons.liste[idLecon].liste[idVoc].affiche();

	//Injecte les éléments html
	element = document.createElement("ul");
	element.innerHTML = 
		"<div id=\"listeSymboles\">"
		+"</div>"
		+"<li id=\"Pinyin\">"+lecons.liste[idLecon].liste[idVoc].pinyin+"</li>"
		+"<li id=\"Traduction\">"+lecons.liste[idLecon].liste[idVoc].traduction+"</li>";

	document.getElementById("middle").appendChild(element);

	//Créer une liste de caractères puis l'injecte au html
	let symbolesLength = lecons.liste[idLecon].liste[idVoc].caractere.length;
	let pathSymboles = new Array(symbolesLength);
	let symboles = new Array(symbolesLength);
	for(let i=0;i<symbolesLength;i++){
		symboles[i] = lecons.liste[idLecon].liste[idVoc].caractere[i];
		pathSymboles[i] = document.createElement("li");
		pathSymboles[i].innerHTML = "<img id=\"Symbole\" src=\"../assets/voc/"+symboles[i]+".jpg\"/>"

		document.getElementById("listeSymboles").appendChild(pathSymboles[i]);
	}
}


/* prochaines étapes :
- implémenter partie jeu
- mélanger array https://www.delftstack.com/fr/howto/javascript/shuffle-array-javascript/
- beau css
- ajouter des lecons
*/


//Osef
function sayHello(){
	console.log("Hello", myName);
	return "John";
};
var myName = "Bob";
myName = sayHello();

