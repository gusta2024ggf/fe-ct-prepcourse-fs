function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
<<<<<<< HEAD
   if(num % 3 === 0 && num % 5 === 0)return "fizzbuzz"
=======
    if(num % 3 === 0 && num % 5 === 0)return "fizzbuzz"
>>>>>>> 4b3fe454a8a8760911cf66a0b61a433f25088e79
  if(num % 3 === 0)return "fizz"
  if(num % 5 === 0)return "buzz"
  else return false
}

module.exports = fizzBuzz;
