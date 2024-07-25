function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:  var numero = 24;
  if(numero >=0){
    numero = true
  }
  else{
    numero = false
  }
  return numero;

}

module.exports = esNumeroEntero;
