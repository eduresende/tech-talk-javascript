/*
 * Module
 *
 * Usa funções e closure para criar uma interface, porem esconder os valores e as implementações.
 *
 *  Consiste de variavies e funções privadas
 *  Cria funções publicas que tem acesso aos dados privados.
 *
 *  Elimina o problema das variáveis globais,
 *  provê segurança e encapsulamento
*/

var employee = function() {
  var salary = 1000,
      bonus = 0.05;

  return {
    name: "Fulano",

    changeSalary: function(increment) {
      salary += Math.abs(increment);
    },

    getSalary: function(){
      return salary * (1 + bonus);
    }
  }
}(); // Função auto-executavel. Está executando a função e retornando o objeto
