// Une fonction qui retourne le plus grand élément d'une liste: 

const tab = [99, 100, 101, 99, 1]

const biggest = (tab) => {
  tab = (Math.max(99, 100, 101, 1))
  return tab
}
const nb = biggest(tab)
console.log(nb)

// Une fonction qui retourne une nouvelle liste dont les nombres sont classés par ordre croissant:

const sortAscend = [99, 100, 101, 1];
sortAscend.sort(function (a, b) {
  return a - b;
});
console.log(sortAscend)

// Une fonction qui retourne une nouvelle liste sans doublons, classée par ordre croissant:

const makeUnique = (tab) => {
  let unique = []

  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < unique.length; j++) {
      if (tab[i] === unique[j]) {
        i++
        j = -1
      } else { }
      if (i === tab.length) {
        return unique
      }
    }
    unique.push(tab[i])
  }
  return unique
}

console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))