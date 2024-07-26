function multiplica(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la multiplicacion de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 50
  // 5, 5 ---> 25
  // Tu código:
const multiplica = x => y => x * y;
console.log(multiplica(10)(5));//muestra 50
console.log(multiplica(5)(5));//muestra 25
  

module.exports = multiplica;
