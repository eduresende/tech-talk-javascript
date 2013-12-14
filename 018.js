/*
 * Javascript não tem escopo de bloco, mas sim de função
 * variáveis devem ser declaradas no inicio da função.
*/

{
  var name = "Edson";

  {
    var lastName = "Arantes";
  }

  console.log(name); // "Edson"
  console.log(lastName); // "Arantes"
}
