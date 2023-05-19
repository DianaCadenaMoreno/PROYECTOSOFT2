function solveQuadraticEquation(a, b, c) {
    var discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      var root = -b / (2 * a);
      return [root];
    } else {
      return []; // Retorna un array vacío si no hay raíces reales
    }
}

function squareRoot(number) {
    if (number >= 0) {
      return Math.sqrt(number);
    } else {
      return NaN; // Retorna NaN si el número es negativo
    }
}

function logarithm(number, base) {
    if (number > 0 && base > 0 && base !== 1) {
      return Math.log(number) / Math.log(base);
    } else {
      return NaN; // Retorna NaN si alguno de los valores es inválido
    }
}

//exportando las funciones
module.exports = { solveQuadraticEquation, squareRoot, logarithm};