let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici

//Declaration de l'heritage 
let maisonFamiliale = 60000000
let terrainsEstimes = 40000000
let liquidites = 20000000

let heritageTotal = maisonFamiliale + terrainsEstimes + liquidites

// repartition pour la premiere categorie 
let premiereCate = heritageTotal * 75 / 100 
// la premiere categorie de l'heritage doit etre partager en 3 parts egales 
let laPart = premiereCate / 3 
paul = laPart
marie = laPart 
// Pour les representants du defunt il faudra diviser la part a deux 
eric = laPart / 2
clair = laPart / 2

// repartition pour la deuxieme categorie 
let deuxiemeCate = heritageTotal * 25 / 100 
// celle ci doit encore etre redistribue a 3 personnes 
let laPart2 = deuxiemeCate / 3 
madameMukuna = laPart2 
joseph = laPart2
sarah = laPart2



// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
