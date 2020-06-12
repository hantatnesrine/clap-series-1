/*
 * /!\ À faire seul !
 *
 * On passe un nombre à notre fonction et il faut que la fonction increment retourne le nombre + 1, exemple : 
 * number = 12 increment(number) retournera 13
 * 
 * Attention, si number n'est pas un nombre on affichera "number doit être un nombre !"
 * number = "bonjour" retournera "bonjour doit être un nombre !"
 */

function increment(number) {
  // CODE HERE
  // on verifie si number est un nombre
  if (isNaN(number)){return number +' doit être un nombre !'}
  else { return number+1}
// return '${number}' doit etre un nombre !' interpolation
}

export { increment };