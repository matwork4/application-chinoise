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
					new Vocabulaire("汉语","hàn yǔ","Chinois parlé"),
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
			case 5:
				this.title="Qui est il ? Qu'est-ce que c'est ?";
				this.liste=[
					new Vocabulaire("是","shì","Être"),
					new Vocabulaire("谁","shéi","Qui"),
					new Vocabulaire("的","de","Particule"),
					new Vocabulaire("朋友","péng you","Ami"),
					new Vocabulaire("女朋友","nǚ péng you","Petite amie"),
					new Vocabulaire("男朋友","nán péng you","Petit ami"),
					new Vocabulaire("单身狗","dān shēn gǒu","Célibataire (chien)"),
					new Vocabulaire("新","xīn","Nouveau"),
					new Vocabulaire("老","lǎo","Vieux"),
					new Vocabulaire("大家","dà jiā","Tout le monde"),
					new Vocabulaire("同学","tóng xué","Camarade de classe"),
					new Vocabulaire("这","zhè","Celui-ci, ce"),
					new Vocabulaire("那","nà","Celui-là, ce"),
					new Vocabulaire("他是谁","tā shì shéi","Qui est-il?"),
					new Vocabulaire("他是我的朋友","tā shì wǒ de péng you","Il est mon ami")
				]
				break;
			case 6:
				this.title="Où vas-tu ?";
				this.liste=[
					new Vocabulaire("去","qù","Aller"),
					new Vocabulaire("哪儿","nă r","Où"),
					new Vocabulaire("电影","diàn yǐng","Film"),
					new Vocabulaire("电影院","diàn yǐng yuàn","Cinéma"),
					new Vocabulaire("吃饭","chī fàn","Manger"),
					new Vocabulaire("食堂","shí táng","Cantine"),
					new Vocabulaire("图书馆","tú shū guǎn","Bibliothèque"),
					new Vocabulaire("今天","jīn tiān","Aujourd'hui"),
					new Vocabulaire("上海","shàng hǎi","Shanghai"),
					new Vocabulaire("北京","běi jīng","Pékin"),
					new Vocabulaire("东京","dōng jīng","Tokyo"),
					new Vocabulaire("巴黎","bā lí","Paris"),
					new Vocabulaire("伦敦","lún dūn","Londres"),
					new Vocabulaire("你去哪儿","nǐ qù nă r","Où vas-tu ?"),
					new Vocabulaire("我去看电影","wǒ qù kàn diàn yǐng","Je vais regarder film")
				]
				break;
			case 7:
				this.title="Avoir et classificateurs";
				this.liste=[
					new Vocabulaire("有","yǒu","Avoir"),
					new Vocabulaire("没有","méi yǒu","Négation avoir"),
					new Vocabulaire("只","zhī","Seulement"),
					new Vocabulaire("词典","cí diǎn","Dictionnaire"),
					new Vocabulaire("问题","wèn tí","Problème, question"),
					new Vocabulaire("事儿","shì r","Problème (familier)"),
					new Vocabulaire("本","běn","Classificateur"),
					new Vocabulaire("有事儿马","yǒu shì r ma","As-tu des problèmes?"),
					new Vocabulaire("没事儿","méi shì r","Pas de problème"),
					new Vocabulaire("有问题马","yǒu wèn tí ma","As-tu une question?"),
					new Vocabulaire("我有一个问题","wǒ yǒu yī gè wèn tí","J'ai une question")
				]
				break;
			case 8:
				this.title="Famille et classificateurs";
				this.liste=[
					new Vocabulaire("班","bān","Classe, cours"),
					new Vocabulaire("几","jī","Combien"),
					new Vocabulaire("家","jiā","Famille, maison"),
					new Vocabulaire("口","kǒu","Classif., bouche"),
					new Vocabulaire("买","mǎi","Acheter"),
					new Vocabulaire("张","zhāng","Classificateur"),
					new Vocabulaire("票","piào","Ticket, billet"),
					new Vocabulaire("报","bào","Journal"),
					new Vocabulaire("种","zhǒng","Type"),
					new Vocabulaire("无线","wú xiàn","Wi-Fi"),
					new Vocabulaire("上网","shàng wǎng","Aller sur internet"),
					new Vocabulaire("卡","kǎ","Carte"),
					new Vocabulaire("电话卡","diàn huà kǎ","Carte SIM"),
					new Vocabulaire("信用卡","xìn yòng kǎ","Carte bancaire"),
					new Vocabulaire("姐姐","jiě jiě","Grande soeur"),
					new Vocabulaire("妹妹","mèi mèi","Petite soeur"),
					new Vocabulaire("哥哥","gē gē","Grand frère"),
					new Vocabulaire("弟弟","dì dì","Petit frère"),
					new Vocabulaire("大哥","dà gē","Le frère ainé"),
					new Vocabulaire("小弟","xiǎo dì","Le frère cadet")
				]
				break;
			case 9:
				this.title="Les métiers et écoles";
				this.liste=[
					new Vocabulaire("医生","Yī shēng","Médecin"),
					new Vocabulaire("护士","Hù shì","Infirmier"),
					new Vocabulaire("侓师","Lù shī","Avocat"),
					new Vocabulaire("记者","Jì zhě","Journaliste"),
					new Vocabulaire("工作","Gōng zuò","Travail"),
					new Vocabulaire("工人","Gōng rén","Ouvrier"),
					new Vocabulaire("员工","Yuán gōng","Employé"),
					new Vocabulaire("服务员","Fú wù yuán","Serveur"),
					new Vocabulaire("司机","Sī jī","Chauffeur"),
					new Vocabulaire("工程师","Gōng chéng shī","Ingénieur"),
					new Vocabulaire("家庭主妇","Jiā tíng zhǔ fù","Femme au foyer"),
					new Vocabulaire("个体","Gè tǐ","Auto entrep. (solo)"),
					new Vocabulaire("老师","Lǎo shī","Enseignant(e)"),
					new Vocabulaire("学生","Xué shēng","Etudiant(e)"),
					new Vocabulaire("大学","Dà xué","Université"),
					new Vocabulaire("高中","Gāo zhōng","Lycée"),
					new Vocabulaire("中学","Zhōng xué","Collège"),
					new Vocabulaire("小学","Xiǎo xué","Petite école")
				]
				break;
			case 10:
				this.title="Arbre généalogique";
				this.liste=[
					new Vocabulaire("甲祖书","Jiǎ zǔ shū","Arbre généalogique"),
					new Vocabulaire("我","Wǒ","Je, moi"),
					new Vocabulaire("妹妹","Mèi mei","Petite soeur"),
					new Vocabulaire("姐姐","Jiě jiě","Grande soeur"),
					new Vocabulaire("弟弟","Dì dì","Petit frère"),
					new Vocabulaire("哥哥","Gē gē","Grand frère"),
					new Vocabulaire("妈妈","Mā mā","Maman"),
					new Vocabulaire("爸爸","Bà ba","Papa"),
					new Vocabulaire("外婆","Wài pó","Grand-mère (mat.)"),
					new Vocabulaire("外公","Wài gōng","Grand-père (mat.)"),
					new Vocabulaire("奶奶","Nǎi nai","Grand-mère (pat.)"),
					new Vocabulaire("爷爷","Yé yé","Grand-père (pat.)"),
					new Vocabulaire("姨妈","Yí mā","Tante (mat.)"),
					new Vocabulaire("姨父","Yí fu","Mari de tante (mat.)"),
					new Vocabulaire("舅舅","Jiù jiu","Oncle (mat.)"),
					new Vocabulaire("舅妈","Jiù mā","Femme d'oncle (mat.)"),
					new Vocabulaire("姑姑","Gū gū","Tante (pat.)"),
					new Vocabulaire("姑父","Gū fu","Mari de tante (pat.)"),
					new Vocabulaire("伯伯","Bó bo","Oncle (pat.)"),
					new Vocabulaire("伯母","Bó mǔ","Femme d'oncle (pat.)"),
					new Vocabulaire("表妹","Biǎo mèi","Pet. cousine (mat.)"),
					new Vocabulaire("表姐","Biǎo jiě","Gra. cousine (mat.)"),
					new Vocabulaire("表弟","Biǎo dì","Pet. cousin (mat.)"),
					new Vocabulaire("表哥","Biǎo gē","Gra. cousin (mat.)"),
					new Vocabulaire("堂妹","Táng mèi","Pet. cousine (pat.)"),
					new Vocabulaire("堂姐","Táng jiě","Gra. cousine (pat.)"),
					new Vocabulaire("堂弟","Táng dì","Pet. cousin (pat.)"),
					new Vocabulaire("堂哥","Táng gē","Gra. cousin (pat.)")
				]
			case 11:
				this.title="L'expression de l'action en cours";
				this.liste=[
					new Vocabulaire("在","zài","Action en cours"),
					new Vocabulaire("正在","zhèng zài","Action en cours"),
					new Vocabulaire("电视","diàn shì","Télévision"),
					new Vocabulaire("练习","liàn xí","Devoirs"),
					new Vocabulaire("干","gàn","Faire"),
					new Vocabulaire("逛","guàng","Se promener"),
					new Vocabulaire("商店","shāng diàn","Magasin"),
					new Vocabulaire("连环画","lián huán huà","BD"),
					new Vocabulaire("从","cóng","De, depuis"),
					new Vocabulaire("就","jiù","Déjà, aussitôt")
				]
				break;
			case 12:
				this.title="Demander l'heure";
				this.liste=[
					new Vocabulaire("电","diàn","Heure"),
					new Vocabulaire("钟","zhōng","Heure"),
					new Vocabulaire("差","chà","Manquer, moins"),
					new Vocabulaire("刻","kè","Quart d'heure"),
					new Vocabulaire("分","fēn","Minute"),
					new Vocabulaire("半","bàn","Moitié"),
					new Vocabulaire("时间","shí jiān","Temps, heure"),
					new Vocabulaire("凌晨","líng chén","Petit matin, aube"),
					new Vocabulaire("早上","zăo shang","Matin"),
					new Vocabulaire("上午","shàng wŭ","Matinée"),
					new Vocabulaire("下午","xià wŭ","Après-midi"),
					new Vocabulaire("晚上","wăn shang","Soir"),
					new Vocabulaire("午夜","wŭ yè","Minuit"),
					new Vocabulaire("夜间","yè jiān","Nuit"),
					new Vocabulaire("上","shàng","Commencer"),
					new Vocabulaire("下","xià","Finir")
				]
				break;
			case 13:
				this.title="Fixer un rendez-vous";
				this.liste=[
					new Vocabulaire("咱们","zán men","Nous"),
					new Vocabulaire("电影","diàn yĭng","Film"),
					new Vocabulaire("开演","kāi yăn","Commencer (film)"),
					new Vocabulaire("开始","kāi shĭ","Commencer (genéral)"),
					new Vocabulaire("上课","shàng kè","Commencer (cours)"),
					new Vocabulaire("下课","xià kè","Finir le cours"),
					new Vocabulaire("见面","jiàn miàn","Se rencontrer"),
					new Vocabulaire("上班","shàng bān","Commencer (travail)"),
					new Vocabulaire("下班","xià bān","Finir (travail)"),
					new Vocabulaire("等","děng","Attendre"),
					new Vocabulaire("下课见","xià kè jiàn","Se voir après le cours")
				]
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
			new Lecon(4),
			new Lecon(5),
			new Lecon(6),
			new Lecon(7),
			new Lecon(8),
			new Lecon(9),
			new Lecon(10),
			new Lecon(11),
			new Lecon(12),
			new Lecon(13)
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
function creerBoutonsLecons(type){
	//type = 'jeu' ou 'lecon'
	let leconArray = new Array(lecons.liste.length);

	listeBtnGauche = document.createElement("div");
	listeBtnGauche.setAttribute('id', "listeBtnGauche");
	document.getElementById("listeBtn").appendChild(listeBtnGauche);
	for(let i=0;i<(lecons.liste.length)/2;i++){
		leconArray[i] = document.createElement("li");
		if(type=='jeu'){
			leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon2\" href=\"choixJeu.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
		}else{
			leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon2\" href=\""+type+"Panel.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
		}
		document.getElementById("listeBtnGauche").appendChild(leconArray[i]);
	}
	
	listeBtnDroite = document.createElement("div");
	listeBtnDroite.setAttribute('id', "listeBtnDroite");
	document.getElementById("listeBtn").appendChild(listeBtnDroite);
	for(i=parseInt((lecons.liste.length+1)/2);i<lecons.liste.length;i++){
		console.log("i = "+i);
		leconArray[i] = document.createElement("li");
		if(type=='jeu'){
			leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon2\" href=\"choixJeu.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
		}else{
			leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon2\" href=\""+type+"Panel.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
		}
		document.getElementById("listeBtnDroite").appendChild(leconArray[i]);
	}

	/*
	for(let i=0;i<lecons.liste.length;i++){
		leconArray[i] = document.createElement("li");
		leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon"+(i)+"\" href=\"leconPanel.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
		document.getElementById("listeBtn").appendChild(leconArray[i]);
	}*/
}

/* =================================== 
*  Fonction creerBoutonsJeux :
*  OBSOLETE /!\ grâce au Type 'jeu' ou 'lecon' de creerBoutonsLecons()
*  Permet de générer les boutons des leçons
*  ===================================
*/
function creerBoutonsJeux(){

	let leconArray = new Array(lecons.liste.length);

	for(let i=0;i<lecons.liste.length;i++){
		leconArray[i] = document.createElement("li");
		leconArray[i].innerHTML = "<a type=\"button\" onclick=\"setChoixLecon("+lecons.liste[i].id+")\" id=\"Lecon"+(i)+"\" href=\"jeuPanel.html\">Leçon "+(i)+" : "+lecons.liste[i].title+"</a></li>";
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
		pathSymboles[i].innerHTML = "<img id=\"Symbole\" onclick=\"writeCharacter('"+symboles[i]+"');\" src=\"../assets/voc/"+symboles[i]+".jpg\"/>"

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
	
	//document.getElementById("Pagination").style.background = "#5a111b";
	let elementExists = document.getElementById("Pagination");
	if( elementExists != null){
		elementExists.style.background = "#5a111b";
	}
	//document.getElementById("Terminer").style.background = "#5a111b";
	let elementExists2 = document.getElementById("Terminer");
	if( elementExists2 != null){
		elementExists2.style.background = "#5a111b";
	}
	//document.getElementById("Suivant").style.background = "#5a111b";
	let elementExists3 = document.getElementById("Suivant");
	if( elementExists3 != null){
		elementExists3.style.background = "#5a111b";
	}
	
	
	
	
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
	let s = sessionStorage.getItem('score');
	if(s==null){
		return 0;
	}else{
		return parseInt(s);
	}
}

/* ===================================
*  Fonction creerJeuLecon :
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
			pathSymboles[i].innerHTML = "<img id=\"Symbole\" onclick=\"writeCharacter('"+symboles[i]+"');\" src=\"../assets/voc/"+symboles[i]+".jpg\"/>"

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



