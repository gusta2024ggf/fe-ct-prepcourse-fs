function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
   let x = 5;
  let y = 5;
  const obtenerResto = x % y;
  return obtenerResto;
}

module.exports = obtenerResto;
