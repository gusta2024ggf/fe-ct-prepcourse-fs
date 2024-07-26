function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
<<<<<<< HEAD
if(letra === "a") return "Es vocal"
else if(letra === "e") return "Es vocal"
else if(letra === "i") return "Es vocal"
else if(letra === "o") return "Es vocal"
else if(letra === "u") return "Es vocal"
else return false





}
=======
   if (letra == "A" || "E" || "I" || "O" || "U" || "a" || "e" || "i" || "o" ||"u") {
    return " Es vocal"
  }
  if (letra != "A" || "E" || "I" || "O" || "U" || "a" || "e" || "i" || "o" || "u") {
    return " Dato incorrecto"
  }
>>>>>>> 872eb9afb44acb9f145d796f6712a0a94875a3e7

module.exports = esVocal;
