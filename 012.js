// padrão Method

var p = {
  firstName: "Fulano",
  lastName: "de Tal",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

p.fullName() // "de Tal"

p.lastName = "da Silva";

// o this é sempre avaliado no momento em que o método é chamado

p.fullName() // "Fulano da Silva"
