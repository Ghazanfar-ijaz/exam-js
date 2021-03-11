/*
Ecrire une fonction isOdd qui prend un nombre en paramètre et
qui devra retourner true si le nombre passé en paramètre est impair,
sinon la fonction retournera false.
*/

function is0dd(value) {
  if (value % 2 === 1)
    return true;
  else
    return false;
}
console.log(is0dd(3))

/*
Ajouter au fichier précédent une fonction isEven qui prend un nombre
en paramètre et qui devra retourner true si le nombre passé en paramètre est pair,
sinon la fonction retournera false.
la fonction isEven devra absolument utiliser la fonction isOdd pour effectuer sa vérification de parité.
*/

function isEven(value) {
  if (is0dd(value))
    return false;
  else
    return true;
}
console.log(isEven(7))

/*
const isOdd = (nb) => {
  /*
  if (nb % 2 !== 0) {
    return true
  } else {
    return false
  }
/*
return nb % 2 !== 0
}

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isOdd(1)) // true
console.log(isOdd(10)) // false
console.log(isEven(1)) // false
console.log(isEven(10)) // true
*/