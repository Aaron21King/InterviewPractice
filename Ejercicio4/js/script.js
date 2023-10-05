function encontrarNumerosPares(numero) {
  if (numero <= 0 || !Number.isInteger(numero)) {
    return "Ingresa un número entero positivo.";
  }

  const numerosPares = [];

  for (let i = 2; i <= numero; i += 2) {
    numerosPares.push(i);
  }

  return numerosPares;
}

const numero = 10;
const numerosPares = encontrarNumerosPares(numero);
console.log(numerosPares); 
