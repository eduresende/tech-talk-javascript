// Funções podem ser definidas dentro de funções

function outer(){

  var name = "Fulano"

  function inner() {
    console.log(name);
  }

  inner();
}

outer() // "Fulano"
