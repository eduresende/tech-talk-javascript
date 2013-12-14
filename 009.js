// O nome da função é opcional.
// Pode ser usado para recursividade:

// fatorial de 5 == 1 * 2 * 3 * 4 * 5 == 120
// fatorial de 0 == 1
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

factorial(5) // 120

// Função anônima
var sum = function(a, b) {
  return a + b;
}

sum.name // ''

function subtract(a, b) {
  return a - b;
}

subtract.name // 'subtract'
