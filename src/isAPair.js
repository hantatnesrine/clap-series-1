/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une pair, exemple : 
 * cards = ["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"] isPaired(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isPaired(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : s => ♠, h => ♥, c => ♣, d => ♦
 */

function isAPair(cards) {
  // CODE HERE
  // recuperer les types
  var types=[];
  cards.forEach (function(card){
      types.push(card.charAt(0))  
  })
console.log(types)
// compter le nombre d'occurence
var result = {};
types.forEach(function(elem){
  if(elem in result){
    result[elem] = ++result[elem];
  }
  else{
    result[elem] = 1;
  }
});
const tabType = (Object.values(result))


// checks whether an element is same
const same = (element) => element  === element;

return tabType.some(same);
}

export { isAPair };