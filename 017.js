/*
 * Escopo
 *
 * Controla a visibilidade e ciclo de vida de variaveis e parametros
 *
 * Facilita a vida do programador
 *   -> evita conflitos de nomes
 *   -> libera memoria
 *
*/

function fora(){
  var name = "Fulano"

  function dentro(){
    var name = "Beltrano"
    var age = 20

    return name;
  }

  dentro() // Beltrano
  name // Fulano
  age // ReferenceError: age is not defined
}

fora();
