function encontrarDuplicados(numeros) {
  return numeros.filter((numero, index, array) => array.indexOf(numero) !== index);
}

const numeros = [1, 2, 3, 4, 2, 7, 3, 8, 1, 9];
const duplicados = encontrarDuplicados(numeros);
console.log(duplicados); 
