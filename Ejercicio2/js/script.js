const CalculadoraGeometrica = {
  calcularArea: function (figura, datos) {
    switch (figura) {
      case "circulo":
        return Math.PI * datos.radio ** 2;
      case "rectangulo":
        return datos.largo * datos.ancho;
      case "triangulo":
        return (datos.base * datos.altura) / 2;
      default:
        return "Figura no soportada";
    }
  },
  calcularPerimetro: function (figura, datos) {
    switch (figura) {
      case "circulo":
        return 2 * Math.PI * datos.radio;
      case "rectangulo":
        return 2 * (datos.largo + datos.ancho);
      case "triangulo":
        return datos.lado1 + datos.lado2 + datos.lado3;
      default:
        return "Figura no soportada";
    }
  },
};
const resultadoAreaCirculo = CalculadoraGeometrica.calcularArea("circulo", { radio: 5 });
const resultadoPerimetroRectangulo = CalculadoraGeometrica.calcularPerimetro("rectangulo", { largo: 6, ancho: 4 });

console.log(`Área del círculo: ${resultadoAreaCirculo}`);
console.log(`Perímetro del rectángulo: ${resultadoPerimetroRectangulo}`);
