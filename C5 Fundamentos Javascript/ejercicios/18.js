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
   if (letra == "A" || "E" || "I" || "O" || "U" || "a" || "e" || "i" || "o" ||"u") {
    return " Es vocal"
  }
  if (letra != "A" || "E" || "I" || "O" || "U" || "a" || "e" || "i" || "o" || "u") {
    return " Dato incorrecto"
  }

module.exports = esVocal;
