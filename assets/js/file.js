// Exercice 1
// Écrivez un programme JavaScript pour supprimer la propriété rollno de l'objet suivant.
// Imprimez également l'objet avant ou après la suppression de la propriété.
var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12 
};
// afficher l'objet 
console.log(student);
// supprimer l'opérateur
delete student.rollno;
// afficher l'objet 
console.log(student);

// Exercice 2
// Créez un objet pour contenir des informations sur votre recette préférée. Il doit avoir des propriétés pour le titre (une chaîne), les portions (un nombre) et les ingrédients (un tableau de chaînes).
var recettePrefere = {
    nom: "socca",
    servies: 2,
    ingredients: ["pois-chiche", "soleil", "poivre"]
}
// afficher l'objet recettePrefere
for (var key in recettePrefere) {
    console.log(key + " : " + recettePrefere[key]);
}

// Exercice 3 
// Écrivez un programme JavaScript pour afficher l'état de lecture (c'est‐à‐dire afficher le nom du livre, le nom de l'auteur et l'état de lecture) des livres suivants :
let biblio = [
    {
        title:   'Bill Gates',
        author:  'The Road Ahead',
        readingStatus:  true
    },
    {
        title: 'Steve Jobs',
        author:  'Walter Isaacson',
        readingStatus:  true
    },
    {
        title:  'Mockingjay: The Final Book of The Hunger Games',
        author:  'Suzanne Collins',
        readingStatus: false
    }
]

biblio.forEach(livre => {
    if(livre.readingStatus === true) {
        livre.readingStatus = "lu";
    }
    else {
        livre.readingStatus = "non lu";
    }
    console.log("Nom du livre: " + livre.title);
    console.log("Nom de l'auteur: " + livre.author);
    console.log("Etat de lecture: " + livre.readingStatus);
});

// Exercice 4 
// Exercice 4 - Partie 1 
// Créez un constructeur qui permet de créer un guerrier. 
// let Guerrier = function(name, attack, defense, health){
//     this.name = name;
//     this.attack = attack;
//     this.defense = defense;
//     this.health = health;
//     this.setAttack = function(opponent) {
//         opponent.health = opponent.health - this.attack;
//         document.writeln(`<p> ${this.name} attaque ${opponent.name}.</p>`);
//         document.writeln(`<p> Il reste ${opponent.health} points de vie à ${opponent.name}.</p>`);
//     }
// }

// //on crée les personnages
// let guerrier1 = new Guerrier("Iron Man", "50", "30", "100");
// let guerrier2 = new Guerrier("Thanos", "70", "50", "200");
// //tests 
// // console.log(guerrier2.health);
// // guerrier1.setAttack(guerrier2);
// // console.log(guerrier2.health);

// //Exercice 4 - Partie 2
// //Créer un autre type de personnage : le magicien.
// let Magicien = function(name, attack, defense, health, mana){
//     this.name = name;
//     this.attack = attack;
//     this.defense = defense;
//     this.health = health;
//     this.mana = mana;
//     this.setAttack = function(opponent) {
//         opponent.health = opponent.health - this.attack;
//         document.writeln(`<p> ${this.name} attaque ${opponent.name}.</p>`);
//         document.writeln(`<p> Il reste ${opponent.health} points de vie à ${opponent.name}.</p>`);
//     }

//     this.care = function(mana, health) {
//         if(this.mana > 10) {
//             this.mana -= 10;
//             this.health += 10;
//             document.writeln(`<p> ${this.name} tente de se soigner avec la méthode de soin.</p>`);
//             document.writeln(`<p> ${this.name} a désormais ${this.health} points de vie.</p>`);
//         }
//         else {
//             document.writeln("<p> Pas assez de mana pour lancer la méthode de soin !</p>")
//         }   
//     }
// }

// let magicien1 = new Magicien("Gandalf", "30", "60", "250", "100");
// console.log(magicien1);

// // attaques de l'exo
// guerrier1.setAttack(magicien1);
// guerrier2.setAttack(magicien1);
// magicien1.care();
// magicien1.setAttack(guerrier1);

// Exercice 4 - avec des classes 
// Exercice 4 - Partie 1 
// Créez un constructeur qui permet de créer un guerrier.
class Guerrier {
    constructor(name, attack, defense, health){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
    }
    
    setAttack(opponent) {
        opponent.health = opponent.health - this.attack;
        document.writeln(`<p> ${this.name} attaque ${opponent.name}.</p>`);
        document.writeln(`<p> Il reste ${opponent.health} points de vie à ${opponent.name}.</p>`);
    }
}

// on créé la classe Magicien
class Magicien {
    constructor (name, attack, defense, health, mana) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health
        this.mana = mana;
    }
    setAttack(opponent) {
        opponent.health = opponent.health - this.attack;
        document.writeln(`<p> ${this.name} attaque ${opponent.name}.</p>`);
        document.writeln(`<p> Il reste ${opponent.health} points de vie à ${opponent.name}.</p>`);
    }

    takeCare(mana, health) {
        if(this.mana > 10) {
            this.mana -= 10;
            this.health += 10;
            document.writeln(`<p> ${this.name} tente de se soigner avec la méthode de soin.</p>`);
            document.writeln(`<p> ${this.name} a désormais ${this.health} points de vie.</p>`);
        }
        else {
            document.writeln("<p> Pas assez de mana pour lancer la méthode de soin !</p>")
        }   
    }
}

// on créer les personnages 
let guerrier1 = new Guerrier("Iron Man", "50", "30", "100");
let guerrier2 = new Guerrier("Thanos", "70", "50", "200");
let magicien1 = new Magicien("Gandalf", "30", "60", "250", "100");

// // attaques de l'exo
guerrier1.setAttack(magicien1);
guerrier2.setAttack(magicien1);
magicien1.takeCare();
magicien1.setAttack(guerrier1);

