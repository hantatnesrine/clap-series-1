/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */
function isAFlush (cards){
  // recuperer les types
    var types=[];
    cards.forEach (function(card){
        types.push(card.charAt(card.length-1))  
    })
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
  // verifier si le type se repete 4 fois ou plus
	const TabVal = Object.values(result)
  const even = (element) => element >=4;
  return TabVal.some(even);
}
//

export { isAFlush };



