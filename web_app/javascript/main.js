/* Conçu par Mathis R.
 * Année 2021/2022
 */

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
					new Vocabulaire("名字","míng zì","Nom, prénom"),
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
			case 3:
				this.title="Âge et numéro de téléphone";
				this.liste=[
					new Vocabulaire("电话","diàn huà","Téléphone"),
					new Vocabulaire("手机","shǒu jī","Portable"),
					new Vocabulaire("号","háo","Numéro"),
					new Vocabulaire("号码","háo mǎ","Numéro"),
					new Vocabulaire("多","duō","Nombreux, combien"),
					new Vocabulaire("少","shǎo","Peu nombreux"),
					new Vocabulaire("多少","duō shǎo","Combien"),
					new Vocabulaire("岁","suì","An (âge)"),
					new Vocabulaire("了","le","Particule finale"),
					new Vocabulaire("你多大了","nǐ duō dà le","Quel âge as-tu?"),
					new Vocabulaire("我二十岁","wǒ èr shí suì","J'ai 20 ans")
				];
				break;
			case 4:
				this.title="Qu'est-ce que tu étudies ?";
				this.liste=[
					new Vocabulaire("学习","xué xí","Apprendre, étudier"),
					new Vocabulaire("什么","shén me","Quoi, quel"),
					new Vocabulaire("经济习","jīng jì xué","Économie"),
					new Vocabulaire("外语","wài yǔ","Langue étrangère"),
					new Vocabulaire("数学","shù xué","Mathématiques"),
					new Vocabulaire("计算机","jì suàn jī","Informatique, PC"),
					new Vocabulaire("做","zuò","Faire"),
					new Vocabulaire("看","kàn","Regarder, voir"),
					new Vocabulaire("书","shū","Livre"),
					new Vocabulaire("看书","kàn shū","Lire (un livre)"),
					new Vocabulaire("说","shuō","Parler (une langue)"),
					new Vocabulaire("说话","shuō huà","Parler"),
					new Vocabulaire("你学什么","nǐ xué shén me","Qu'étudies-tu?"),
					new Vocabulaire("我学汉语","wǒ xué hàn yǔ","J'étudie le chinois")
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
			new Lecon(2),
			new Lecon(3),
			new Lecon(4)
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

/* ===================================
*  Fonction creerBoutonsJeux :
*  Permet de générer les boutons des leçons
*  ===================================
*/
function creerBoutonsJeux(){

	let leconArray = new Array(lecons.liste.length);

	for(let i=0;i<lecons.liste.length;i++){
		leconArray[i] = document.createElement("li");
		leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon"+(i)+"\" href=\"jeuPanel.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
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
*  Getter et setter choixJeu :
*  Permet de créer une variable session correspondante a l'ID d'un vocabulaire
*  1 : caractère -> pinyin
*  2 : caractère -> traduction
*  3 : pinyin -> caractère
*  4 : pinyin -> traduction
*  5 : traduction -> caractère
*  6 : traduction -> pinyin
*  ===================================
*/
function setChoixJeu(num){
	sessionStorage.setItem('choixJeu',num);
}
function getChoixJeu(){
	let a = sessionStorage.getItem('choixJeu')
	//console.log("choixJeu = "+a);
	return a;
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
	idLecon=getChoixLecon();
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
*  Fonction creerTitreJeu :
*  Permet de générer un titre sur un jeu
*  ===================================
*/
function creerTitreJeu(){
	id=getChoixLecon(); 

	titre = document.createElement("h2");
	titre.setAttribute('id', "jouerTitreLecon");
	titre.innerHTML = "Leçon "+lecons.liste[id].id+" : "+lecons.liste[id].title;
	document.getElementById("jouerHeader").appendChild(titre);
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

/* ===================================
*  Fonction changeCouleurJeux :
*  Change la couleur du fond des jeux
*  ===================================
*/
function changeCouleurJeux(){
	choixJeu=getChoixJeu();

	if(choixJeu==1 || choixJeu==2){
		document.getElementById("middleJeu").style.background = "rgba(236, 120, 83, 0.9)";
		
	}else if(choixJeu==3 || choixJeu==4){
		document.getElementById("middleJeu").style.background = "rgba(175, 75, 77, 0.9)";
		
	}else if(choixJeu==5 || choixJeu==6){
		document.getElementById("middleJeu").style.background = "rgba(125, 48, 70, 0.9)";
	}
	
	document.getElementById("jouerTitreLecon").style.background = "#5a111b";
	//document.getElementById("Precedent").style.background = "#5a111b";
	//document.getElementById("Retour").style.background = "#5a111b";
	document.getElementById("Pagination").style.background = "#5a111b";
	document.getElementById("Terminer").style.background = "#5a111b";
	document.getElementById("Suivant").style.background = "#5a111b";
	
}

/* ===================================
*  Fonction randomInt :
*  Permet de générer un nombre aléatoire entre min et max inclus
*  ===================================
*/
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

/* ===================================
*  Fonction shuffle :
*  Melange un tableau (array) et retourne le tableau mélangé
*  ===================================
*/
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

  return array;
}

/* ===================================
*  Setter randomArrayLecon :
*  Stock les indices mélangés d'une leçon
*  ===================================
*/
function setRandomArrayLecon(){
	idLecon=parseInt(getChoixLecon());
	let leconLength = lecons.liste[idLecon].liste.length;

	let listeIndices = new Array(leconLength);
	for(let i=0;i<leconLength;i++){
		listeIndices[i]=i;
	}
	let listeIndicesMelanges = new Array(leconLength);
	listeIndicesMelanges = shuffle(listeIndices);
	sessionStorage.setItem('indicesMelanges',listeIndicesMelanges);
}
/* ===================================
*  Getter randomArrayLecon :
*  Transforme une chaine de caracteres en un tableau de int
*  ===================================
*/
function getRandomArrayLecon(){
	//replace permet de retirer la ,
	//return sessionStorage.getItem('indicesMelanges').replace(/,/g,'');
	let taille=lecons.liste[parseInt(getChoixLecon())].liste.length;
	let a = sessionStorage.getItem('indicesMelanges');
	let b = new Array(taille);
	let j=0;
	//console.log("a = "+a);
	for(let i=0;i<taille;i++){
		b[i]=0;
		while(a[j]!=',' && j<a.length){
			//console.log("a["+j+"] = "+a[j]);
			b[i]=b[i]*10+parseInt(a[j]);
			j++;
		}
		j++; //pour pas rester coincé sur une virgule
		
		//console.log("b["+i+"] = "+b[i]);
	}
	//console.log("tirage = "+b);

	return b;
}

/* ===================================
*  Getter et Setter setScore :
*  Pose et recupere le score du joueur
*  ===================================
*/
function setScore(num){
	sessionStorage.setItem('score',num);
}
function getScore(){
	return parseInt(sessionStorage.getItem('score'));
}

/* ===================================
*  Fonction creerVocLecon :
*  Permet de générer les symboles, le pinyin et la traduction du panel Lecon
*  ===================================
*/
function creerJeuPanel(){
	indiceTypeJeu=parseInt(getChoixJeu())-1;
	idLecon=parseInt(getChoixLecon());
	idVoc=parseInt(getChoixVoc());
	let leconLength = lecons.liste[idLecon].liste.length;
	
	
	let tabTypeReponses = creerTabTypeReponses(); //Tableau contenant des strings caractère, pinyin ou traduction
	console.log("typeJeu = "+tabTypeReponses[indiceTypeJeu]);
	
	//Si premier item, on melange la liste
	if(idVoc==0){
		setRandomArrayLecon();
	}
	let indicesMelanges = new Array(leconLength);
	indicesMelanges=getRandomArrayLecon();
	

	//tire random[1-4] savoir quel sera la bonne réponse
	let idBonneReponse = randomInt(0,3);
	console.log("id bonneReponse = "+idBonneReponse);

	let tableauReponses = new Array(4); //créer les 4 réponses
	let r = new Array(4);
	let recommence = 1; //permet de retirer un indice pour éviter les doublons
	for(let i=0;i<=3;i++){
		if(i==idBonneReponse){
			//console.log("indicesMelanges[idVoc] = "+indicesMelanges[idVoc]);
			tableauReponses[i]=lecons.liste[idLecon].liste[indicesMelanges[idVoc]][tabTypeReponses[indiceTypeJeu]];
		}else{
			while(recommence==1){
				recommence=0;
				r[i]=randomInt(0,leconLength-1);
				if(r[i]==indicesMelanges[idVoc]){
					recommence=1;
				}
				for(let j=0;j<i;j++){
					if(r[i]==r[j]){
						recommence=1;
					}
				}
			}
			recommence=1;
			//tableauReponses[i]=lecons.liste[idLecon].liste[r[i]].pinyin;
			tableauReponses[i]=lecons.liste[idLecon].liste[r[i]][tabTypeReponses[indiceTypeJeu]];
		}
	}
	console.log("tableauReponses = "+tableauReponses);
	lecons.liste[idLecon].liste[indicesMelanges[idVoc]].affiche();

	//il reste maintenant a injecter les symboles & réponses en html

	
	element = document.createElement("ul");
	element.innerHTML = 
		"<div id=\"listeSymboles\">"
		+"</div>"
		+"<div id=\"reponsesHaut\">"
		+"<li id=\"reponse1\"><a onclick=\"testReponse(1)\">"+tableauReponses[0]+"</a></li>"
		+"<li id=\"reponse2\"><a onclick=\"testReponse(2)\">"+tableauReponses[1]+"</a></li>"
		+"</div>"
		+"<div id=\"reponsesBas\">"
		+"<li id=\"reponse3\"><a onclick=\"testReponse(3)\">"+tableauReponses[2]+"</a></li>"
		+"<li id=\"reponse4\"><a onclick=\"testReponse(4)\">"+tableauReponses[3]+"</a></li>"
		+"</div>"

	document.getElementById("middleJeu").appendChild(element);

	if(indiceTypeJeu==0 || indiceTypeJeu==1){
		//Créer une liste de caractères puis l'injecte au html
		let symbolesLength = lecons.liste[idLecon].liste[indicesMelanges[idVoc]].caractere.length;
		let pathSymboles = new Array(symbolesLength);
		let symboles = new Array(symbolesLength);
		for(let i=0;i<symbolesLength;i++){
			symboles[i] = lecons.liste[idLecon].liste[indicesMelanges[idVoc]].caractere[i];
			pathSymboles[i] = document.createElement("li");
			pathSymboles[i].innerHTML = "<img id=\"Symbole\" src=\"../assets/voc/"+symboles[i]+".jpg\"/>"

			document.getElementById("listeSymboles").appendChild(pathSymboles[i]);
		}
	//Créer le modèle pinyin
	}else if(indiceTypeJeu==2 || indiceTypeJeu==3){
		element2 = document.createElement("li");
		element2.innerHTML = "<li id=\"Modele\">"+lecons.liste[idLecon].liste[indicesMelanges[idVoc]].pinyin+"</li>";
		document.getElementById("listeSymboles").appendChild(element2);

	//Créer le modèle traduction
	}else if(indiceTypeJeu==4 || indiceTypeJeu==5){
		element2 = document.createElement("li");
		element2.innerHTML = "<li id=\"Modele\">"+lecons.liste[idLecon].liste[indicesMelanges[idVoc]].traduction+"</li>";
		document.getElementById("listeSymboles").appendChild(element2);
	}


	//Cache le bouton suivant
	document.getElementById("Suivant").style.visibility = "hidden";
	//Il n'a pas encore joue
	sessionStorage.setItem('dejaJoue',false);
}


/* ===================================
*  Fonction testReponse :
*  Test si une réponse est correcte.
*  Si oui, passe en vert
*  Si non, passe en rouge et passe en vert la reponse attendue
*  Puis affiche le bouton Suivant
*  ===================================
*/
function testReponse(numReponse){
	//On ne joue pas plusieurs fois
	if(sessionStorage.getItem('dejaJoue')=='true'){
		return;
	}

	typeJeu=parseInt(getChoixJeu());
	idLecon=parseInt(getChoixLecon());
	idVoc=parseInt(getChoixVoc());
	let leconLength = lecons.liste[idLecon].liste.length;

	let tabTypeReponses = creerTabTypeReponses();

	//console.log("Réponse numéro "+numReponse);

	let indicesMelanges = new Array(leconLength);
	indicesMelanges=getRandomArrayLecon();

	//On récupère le string de la réponse
	var stringReponse = document.getElementById("reponse"+numReponse).children[0].text;
	console.log("element : "+stringReponse);
	
	//On test si on a choisit la bonne réponse
	if(stringReponse == lecons.liste[idLecon].liste[indicesMelanges[idVoc]][tabTypeReponses[indiceTypeJeu]]){
		console.log("Bonne réponse !");
		//On met en vert la bonne réponse choisit
		document.getElementById("reponse"+numReponse).children[0].style.background = "lightgreen";
		setScore(getScore()+1);
	}else{
		console.log("Mauvaise réponse");
		//On met en rouge la mauvaise réponse choisit
		document.getElementById("reponse"+numReponse).children[0].style.background = "orangered";

		//On met en vert la réponse correcte attendue
		for(let i=1;i<=4;i++){
			var stringCorrection = document.getElementById("reponse"+i).children[0].text;
			if(stringCorrection == lecons.liste[idLecon].liste[indicesMelanges[idVoc]][tabTypeReponses[indiceTypeJeu]]){
				document.getElementById("reponse"+i).children[0].style.background = "lightgreen";
			}
		}
	}

	if(idVoc<leconLength-1){
	//Passe le bouton suivant en visible
		document.getElementById("Suivant").style.visibility = "visible";
	}else{
		//On affiche le score
		creerScore();
		//On affiche le bouton terminer
		document.getElementById("Terminer").style.visibility = "visible";
	}
	//Il a deja joue
	sessionStorage.setItem('dejaJoue',true);

}

/* ===================================
*  Fonction creerScore :
*  Creer un item HTML correspondant au score
*  ===================================
*/
function creerScore(){
	let idLecon=parseInt(getChoixLecon());
	let leconLength = lecons.liste[idLecon].liste.length;

	elementScore = document.createElement("p");
	elementScore.setAttribute('id', "Score");
	elementScore.innerHTML = "Votre score est "+getScore()+"/"+leconLength;
	document.getElementById("middleJeu").appendChild(elementScore);

}

/* ===================================
*  Fonction creerTabTypeJeux :
*  Creer un tableau correspondant aux types de réponses pour les jeux
*  ===================================
*/
function creerTabTypeReponses(){
	let tabTypeReponses = [
		"pinyin",
		"traduction",
		"caractere",
		"traduction",
		"caractere",
		"pinyin"]

	return tabTypeReponses;
}



