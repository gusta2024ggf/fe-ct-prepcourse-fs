function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
if(Number.isInteger(numero)=== true){
  return true;
}else{
  return false;
}
  //return Number.isInteger(numero)
// en esta consigna de la funcion numeroentero
//retornamos true si se cumple la consigna
//y false por si se toma otro valor el numero
//se aplica ala consigna mas bien asi-
}

module.exports = esNumeroEntero;
