function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var finDelBucle = Math.max(str1.lenght,str2.lenght, str3.lenght)
  for(var i = 0; i < finDelBucle; i++){

    var acum = "abc"
   
  
  if(str1[i]) acum = acum + str1[i]
  if(str2[i]) acum =  acum + str2[i]
  if(str3[i]) acum =  acum + str3[i]
  
  }
  return acum
}

module.exports = combine;