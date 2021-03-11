// Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé.

const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

console.log(reverseStr('Hello!'))

/*
Ajouter au fichier précédent une fonction isPalindrome qui prend une string en paramètre
et qui retourne true si la string est un palindrome, sinon la fonction devra retourner false
*/

const isPalindrome = (str) => {
  if (str === reverseStr(str)) {
    return true;
  } else {
    return false
  }
}

console.log(isPalindrome('radar'))
