// padrão Apply
//
// Eu posso usar um contexto diferente na minha função

var p1 = {
  firstName: "Eduardo",
  lastName: "Resende",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

p1.fullName() // "Eduardo Resende"

var p2 = {
  firstName: "Fulano",
  lastName: "de Tal",
}

p2.fullName() // TypeError: Object #<Object> has no method 'fullName'


// Uso a funcao definida em p1, porem usando p2 como contexto

p1.fullName.apply(p2); // "Fulano de Tal"
