var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(nom, couleur, race, nombrePattes) {
        this.nom = nom;
        this.couleur = couleur;
        this.race = race;
        this.nombrePattes = nombrePattes;
    }
    return Animals;
}());
function photo(Animals) {
    console.log("J'ai photographier tout les animaux");
}
var asticot = new Animals("Asticot", "Orange", "Asticot", 0);
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien(nom, couleur, race, nombrePattes) {
        return _super.call(this, nom, couleur, race, nombrePattes) || this;
    }
    Chien.prototype.Aboyer = function () {
        console.log("OUAFFFFF OUAFFFFF");
    };
    return Chien;
}(Animals));
var Moun = new Chien("Moun", "Marron", "Chien", 4);
var Terre = new Chien("Terre-Neuve", "Noir", "chien", 4);
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom, couleur, race, nombrePattes) {
        return _super.call(this, nom, couleur, race, nombrePattes) || this;
    }
    Chat.prototype.Mioler = function () {
        console.log("Miaaaaaaaaooo");
    };
    return Chat;
}(Animals));
var Europeen = new Chat("Euro", "Noir", "Chat", 4);
var Chartreux = new Chat("Chartreux", "Roux", "Chat", 4);
var Oiseaux = /** @class */ (function (_super) {
    __extends(Oiseaux, _super);
    function Oiseaux(nom, couleur, race, nombrePattes, peuVoler) {
        var _this = _super.call(this, nom, couleur, race, nombrePattes) || this;
        _this.peuVoler = peuVoler;
        return _this;
    }
    Oiseaux.prototype.Voler = function () {
        console.log("Vole juste au dessus de nous !!!");
    };
    return Oiseaux;
}(Animals));
var mesange = new Oiseaux("Mésange", "Marron", "Oiseau", 2, true);
var merle = new Oiseaux("Merle", "Noir", "Oiseau", 2, true);
var Poisson = /** @class */ (function (_super) {
    __extends(Poisson, _super);
    function Poisson(nom, couleur, race, nombrePattes, peuNager) {
        var _this = _super.call(this, nom, couleur, race, nombrePattes) || this;
        _this.peuNager = peuNager;
        return _this;
    }
    Poisson.prototype.Nager = function () {
        console.log("Nage dans la mer");
    };
    return Poisson;
}(Animals));
var thon = new Poisson("Thon", "Rouge", "Poisson", 0, true);
var requin = new Poisson("Requin", "Blanc", "Poisson", 0, true);
function picture(animals) {
    console.log("Click !!! Photo de " + animals.nom);
}
function Miauler(chat) {
    console.log("Le" + " " + chat.nom + " " + "Miaule !!!");
}
function aboiement(chien) {
    console.log("Le" + " " + chien.nom + " " + "Aboit");
}
function fly(oiseaux) {
    console.log(oiseaux.nom + "  " + "vole !!!");
}
function nage(poisson) {
    console.log("Le" + " " + poisson.nom + " " + "nage");
}
function calin(anima) {
    if (anima.nombrePattes === 4) {
        console.log("J'ai caresser le" + " " + anima.nom + "");
    }
    else {
        console.log("");
    }
}
function Nourrire(anim) {
    if (anim.couleur === "Noir") {
        console.log("J'ai nourri le" + "  " + anim.nom + "");
    }
    else {
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
