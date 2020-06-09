/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */
function dealer() {
  // CODE HERE
  //valeur carte
  let carteVal = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  // type d'une carte
  let carteType = ["d", "c", "h", "s"];
  // carte 
  let cartes = [];
  for (let i = 0; i< carteVal.length(); i++){
    for(let j=0 ; j< carteType.length(); j++){
      cartes.push(carteVal[i]+carteType[j])
    }
  }
  
}

export { dealer };