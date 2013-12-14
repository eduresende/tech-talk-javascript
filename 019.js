/*
 * CLOSURE
 *
 * funções internas podem acessar variáveis e parametros da função externa
 * exceto 'this' e 'arguments'
*/

var employee = {
  name: "Fulano",
  salary: 1000,
  bonus: 5
}

// Problemas: Valores podem ser acessados e modificados diretamente.
// Falta de encapsulamento

employee.salary = 50;

console.log(employee.salary); // 50
