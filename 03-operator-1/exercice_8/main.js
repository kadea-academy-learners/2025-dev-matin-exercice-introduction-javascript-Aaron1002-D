let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici
salaireMensuel = 500
loyer = salaireMensuel * 30 / 100
nourriture = salaireMensuel * 20 / 100
transport = salaireMensuel * 10 / 100
autresDepenses = 50 
autresDepenses += 25 
totalDepenses = loyer + nourriture + transport + autresDepenses 
reste = salaireMensuel - totalDepenses

if ( reste >= 100 ) {
  console.log ( " budget est bon")
} else {
  console.log(" attention, budjet serré")
}

let loisirs = salaireMensuel * 15 / 100
totalDepenses += loisirs 
reste = salaireMensuel - totalDepenses
// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
