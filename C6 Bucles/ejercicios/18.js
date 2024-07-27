function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
<<<<<<< HEAD
  var acum = 1
=======
   var acum = 1
>>>>>>> 4b3fe454a8a8760911cf66a0b61a433f25088e79

  for(var i=a; i <= b; i++){
    acum = acum * i
  }
  if(acum === -0){
    return 0
  }
  return Math.abs(acum)
}

module.exports = productoEntreNúmeros;
