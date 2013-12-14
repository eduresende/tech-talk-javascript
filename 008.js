// Funções podem ser guardadas em variáveis, objetos e arrays

var sum = function(a, b) {
  return a + b;
}

sum(3, 4) // 7

// Funções podem ser passadas como parametro para outras funções

function operation(func, a, b) {
  return func(a, b)
}

operation(sum, 5, 3) // 8

// Funções podem ser retornadas em outras funções

if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  }
}
