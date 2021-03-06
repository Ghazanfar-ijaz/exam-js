/* Un garagiste vous demande de compter le nombre de roues qu'il y a dans son garage. 
Les roues sont toutes montées sur des véhicules de types:
monocycle: 1 roue moto: 2 roues voiture: 4 roues limousine: 6 roues 
Ecrivez une fonction countWheels qui prend 4 paramètres,
qui correspondent au nombre de chaque véhicules et
qui retourne le nombre de roues totales: */


const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return nb_monocycle + 2 * nb_moto + 4 * nb_voiture + 6 * nb_limousine
}

console.log(countWheels(10, 20, 7, 2))
console.log(countWheels(2, 3, 4, 5))