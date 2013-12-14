// Exemplo passando parâmetros

var employee = function(params) {
  var salary = params.salary,
      bonus = params.bonus;

  return {
    name: params.name,

    changeSalary: function(increment) {
      salary += Math.abs(increment);
    },

    getSalary: function(){
      return salary * (1 + bonus);
    }
  }
}

e1 = employee({name: "Edson", salary: 3000, bonus: 0.10})

console.log(e1.salary); // undefined
console.log(e1.getSalary()); // 3300

e1.changeSalary(-1000);
console.log(e1.getSalary()); // 4400

console.log(e1.name); // Edson
e1.name = "Tostao"
console.log(e1.name); // Tostao
