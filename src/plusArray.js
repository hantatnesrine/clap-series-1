/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) {
 
    return   arr1.reduce((a, b)=> a + b, 0) + arr2.reduce((a, b)=> a + b, 0);
  
}

export { plusArray };
