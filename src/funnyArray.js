/*
 * /!\ À faire seul !
 * 
 * L'objectif est le suivant :
 *
 * - Si le nombre d'éléments dans le tableau est impair, je retourne l'élément du milieu, exemple :
 * ary = ['un', 'petit', 'tableau'] alors midArray(ary) retournera 'petit'
 * - Si le nombre d'éléments dans le tableau est pair, je retourne une concaténation des éléments exemple :
 * ary = [1,2,3,4] alors funnyArray(ary) retournera 2 + 3 soit 5
 * ary = ['un', 'plus', 'grand', 'tableau'] alors midArray(ary) retournera 'plusgrand'
 * - Si le tableau est vide, je retourne le mot 'rien'
 */
function midArray(ary){
  if(ary.length % 2 !== 0)// nombre d'element impair
  {
    return ary[Math.trunc(ary.length/2)]
  }
  if (ary.length % 2 == 0) //nombre d'elment pair
  {
    return ary[(ary.length / 2)-1] + ary[ary.length / 2]
  }
  if (ary == undefined || ary.length == 0){ // array non defini ou vide
    return 'rien'
  }
}

function funnyArray(ary) {
  // CODE HERE
    midArray(ary)
}

export { funnyArray };