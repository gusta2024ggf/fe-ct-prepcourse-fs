function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
<<<<<<< HEAD
if(num > 0) return "Es positivo"
else if(num < 0) return "Es negativo"
else return false


}

module.exports = esPositivo;
=======
  var num = 4;
  if(num >= 0) {
    return "El numero es positivo ";
} else if(num <=0)
  {
    return "El numero es negativo ";
  }else(num = 0) 
  {
    return false;
  }
return num;
module.exports = esPositivo;
>>>>>>> 872eb9afb44acb9f145d796f6712a0a94875a3e7
