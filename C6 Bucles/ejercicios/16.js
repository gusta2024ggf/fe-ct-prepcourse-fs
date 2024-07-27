function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
<<<<<<< HEAD

  switch (idioma) {
=======
   switch (idioma) {
>>>>>>> 4b3fe454a8a8760911cf66a0b61a433f25088e79
    case "aleman" :
      return "Guten Tag!";
    case "mandarin" :
      return "Ni Hao!";
    case "ingles" :
      return "Hello!";
      default:
        return "Hola!";
  }
<<<<<<< HEAD


=======
>>>>>>> 4b3fe454a8a8760911cf66a0b61a433f25088e79
}

module.exports = saludo;
