/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) {
  // CODE HERE
  let somme=0
  for (let i=0; i<arr1.length; i++){
      somme= somme+arr1[i]+arr2[i]
    }
  return somme
}

export { plusArray };
