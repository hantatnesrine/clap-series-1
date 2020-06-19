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
function cardGenerator(){
  // valeur et type des cartes
  let carteVal = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let carteType = ["d", "c", "h", "s"];

  let hand =[];
  while (hand.length !== 10){
      // generer une carte aleatoire
      let randomVal = carteVal[Math.floor(Math.random() * carteVal.length)];
      let randomType = carteType[Math.floor(Math.random() * carteType.length)];
      let randomCarte= randomVal+randomType; // carte aleatoire
			
      while(! hand.includes(randomCarte) ){
        hand.push(randomCarte);
      }
    }
 

  return  [hand.slice(0,5), hand.slice(5,10)]
}
function dealer() {
return cardGenerator()
}

dealer();

export { dealer };
