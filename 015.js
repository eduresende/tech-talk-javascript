// padrão Constructor
//
// Javascript é uma linguagem de herança prototipal - class free
//   Objetos podem herdar propriedades diretamente de outros objetos
//
// Porem JS fornece uma sintaxe de criação de objetos que remete a linguagens classicas

Player = function(game) { this.favoriteGame = game };
Player.prototype = p;

pl = new Player("tetris");

pl.favoriteGame // "tetris"

// Capitalização é uma convenção importante nesse estilo,
// pois invocar essa função sem o prefixo new pode causar erros

// Esse estilo não é recomendado
