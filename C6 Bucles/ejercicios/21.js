function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
<<<<<<< HEAD

  while(numero > 1){
=======
   while(numero > 1){
>>>>>>> 4b3fe454a8a8760911cf66a0b61a433f25088e79
    if(numero % 2 === 0){
      numero = numero / 2
    }else return false
  }
  return true
}

module.exports = esPotenciaDeDos;
