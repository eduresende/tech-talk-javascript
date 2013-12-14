/*
 * Uma propriedade pode ser uma função
 *
*/

var p = {
  firstName: "Fulano",
  lastName: "de Tal",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

p.fullName() // "Fulano de Tal"
