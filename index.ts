class Animals {

nom : string;
couleur: string;
race : string;
nombrePattes : number;

constructor(nom:string, couleur:string , race:string , nombrePattes : number) {
    this.nom = nom;
    this.couleur = couleur;
    this.race = race;
    this.nombrePattes = nombrePattes;
  }

}

function photo(Animals: Animals) {
  console.log("J'ai photographier tout les animaux");
}

var asticot = new Animals("Asticot" , "Orange" ,  "Asticot" , 0);




class Chien extends Animals {
   

  constructor(nom:string, couleur:string , race:string , nombrePattes : number) {
    super(nom , couleur , race , nombrePattes);
    
  }
   Aboyer(){
console.log("OUAFFFFF OUAFFFFF")
  }
}

var Moun = new Chien("Moun" , "Marron" ,  "Chien" , 4);
var Terre = new Chien("Terre-Neuve", "Noir" , "chien" , 4 );


class Chat extends Animals {
  

  constructor(nom:string, couleur:string , race:string , nombrePattes : number) {
    super(nom , couleur , race , nombrePattes);
    
  }
  Mioler(){
console.log("Miaaaaaaaaooo")
  }
}

var Europeen = new Chat("Euro" , "Noir" ,  "Chat" , 4);
var Chartreux = new Chat("Chartreux" , "Roux" ,  "Chat" , 4);


class Oiseaux extends Animals {

   peuVoler : boolean;

  constructor(nom:string, couleur:string , race:string , nombrePattes : number , peuVoler : true) {
    super(nom , couleur , race , nombrePattes);
    this.peuVoler = peuVoler;
  }
  Voler() {
    console.log("Vole juste au dessus de nous !!!");
  }
}

var mesange = new Oiseaux("Mésange" , "Marron" ,  "Oiseau" , 2 , true);
var merle = new Oiseaux("Merle" , "Noir" ,  "Oiseau" , 2, true);



class Poisson extends Animals {
   
   peuNager : boolean;

  constructor(nom:string, couleur:string , race:string , nombrePattes : number , peuNager : true) {
    super(nom , couleur , race , nombrePattes);
    this.peuNager = peuNager;
  }
  Nager() {
    console.log("Nage dans la mer");
  }
}

var thon = new Poisson("Thon" , "Rouge" ,  "Poisson" , 0 , true);
var requin = new Poisson("Requin" , "Blanc" ,  "Poisson" , 0, true);




function picture(animals : Animals) {
    console.log("Click !!! Photo de "   + animals.nom);
}




function Miauler(chat : Chat) {
    console.log("Le" + " " + chat.nom + " " + "Miaule !!!");
}




function aboiement(chien: Chien) {
    console.log("Le" + " " + chien.nom + " " + "Aboit");
}



function fly(oiseaux : Oiseaux) {
    console.log(oiseaux.nom + "  " + "vole !!!");
}



function nage(poisson : Poisson) {
    console.log("Le" + " " + poisson.nom + " " + "nage")
}


function calin(anima : Animals) {
    if(anima.nombrePattes === 4){
        console.log("J'ai caresser le" + " " + anima.nom +"");
    } else {
        console.log("");
    }
}


function Nourrire(anim : Animals) {
if(anim.couleur === "Noir"){
    console.log("J'ai nourri le" + "  "  + anim.nom + "");
} else{
    console.log("Nourrir les animaux qui n'ont pas 4 pattes est Interdit");
}
}



picture(requin);

Miauler(Europeen);
Miauler(Chartreux);

aboiement(Moun);
aboiement(Terre);

fly(merle);
fly(mesange);

nage(requin);
nage(thon);

calin(asticot);
calin(Moun);

Nourrire(merle);
Nourrire(requin);

