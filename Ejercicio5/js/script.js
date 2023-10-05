function revertirCadena(texto) {
  if (texto === null || texto === "") {
    return "Por favor, ingresa una cadena válida.";
  }
  const cadenaRevertida = texto.split("").reverse().join("");

  return cadenaRevertida;
}

const texto = "Hola hermano, te envio mi reporte";
const resultado = revertirCadena(texto);
console.log(resultado);
