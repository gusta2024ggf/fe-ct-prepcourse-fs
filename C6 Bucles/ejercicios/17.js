function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
<<<<<<< HEAD

  switch (color) {
=======
  
switch (color) {
>>>>>>> 4b3fe454a8a8760911cf66a0b61a433f25088e79
    case "blue" :
      return "This is blue"
    case "red" :
      return "This is red"
    case "green" :
      return "This is green"
    case "orange" :
      return "This is orange"
    default:
      return "Color not found"
  }
<<<<<<< HEAD
  
=======
>>>>>>> 4b3fe454a8a8760911cf66a0b61a433f25088e79
}
module.exports = colors;
