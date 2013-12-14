// padrão Function

sum(3, 4); // this == objeto global

// O this receber o objeto global é um erro no design do javascript

var p = {
  firstName: "Eduardo",
  lastName: "Resende",
  initials: function() {
    // this.firstName[0] == "E"

    function firstNameInitial(){
      return this.firstName[0];
    }

    function lastNameInitial(){
      return this.lastName[0];
    }

    return firstNameInitial() + lastNameInitial();
  }
}

// p.initials() // TypeError: Cannot read property '0' of undefined
// Isso é causado devido ao this dentro da função auxiliar não ser o objeto p
