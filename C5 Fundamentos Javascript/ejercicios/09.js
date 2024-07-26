function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
<<<<<<< HEAD
 if(valor === null)return true
 else if (valor === undefined)return true
 else return false




=======
  var valor;
  if(valor === "texto"){
    return false;
  }else{
    return true;
  }
    
>>>>>>> 872eb9afb44acb9f145d796f6712a0a94875a3e7
  

}

module.exports = esNuloOIndefinido;
