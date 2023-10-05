function encontrarNumeroMasGrande(numeros) {
    if (numeros.length === 0) {
      return "El array está vacío";
    }
  
    let numeroMasGrande = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
      }
    }
  
    return `El número más grande es: ${numeroMasGrande}`;
  }
  
  const numeros = [3, 11, 7, 2, 9, 10];
  const resultado = encontrarNumeroMasGrande(numeros);
  console.log(resultado);
  