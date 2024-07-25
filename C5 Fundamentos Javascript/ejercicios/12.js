function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
    var str1 = "SoyHenry";
  var str2 = "HenrySoy";

  if(str1.lenght == str2.lenght){

  return true;
    
  }   else {
    
    return false
  
  }
}

module.exports = tienenMismaLongitud;
