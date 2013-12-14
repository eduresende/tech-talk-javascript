// Solução: "that"

var p = {
  firstName: "Eduardo",
  lastName: "Resende",
  initials: function() {
    // this.firstName[0] == "E"

    //that = this; // workaround <3

    function firstNameInitial(){
      return this.firstName[0];
    }.bind(this);

    function lastNameInitial(){
      return this.lastName[0];
    }.bind(this);

    return firstNameInitial() + " " + lastNameInitial();
  }
}

console.log(p.initials()); // "E R"

// Agora funciona pois o that guarda o this que queriamos, o contexto do objeto p

// Funções auxiliares podem trazer os mesmos beneficios que
// os metodos privados que usamos em ruby
