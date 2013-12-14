
/*
 * Objetos
 * =================================
 *
 * Tipos primitivos são number, string, boolean, null, undefined
 *
 * O resto é objeto
 *
 * Objetos são conjuntos de dados chave-valor
 *
 * Exemplos: array, function, regex, object
 *
 * Chave: pode ser qualquer string, incluindo ""
 *
 * Valor: poder ser qualquer coisa, exceto undefined
 *
*/

var person = {
  firstName: "Fulano",
  lastName: "de Tal",
  age: 25
}

person["firstName"] // Fulano

person.age // 25

person.money // undefined
