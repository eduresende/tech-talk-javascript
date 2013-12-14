/* Prototype
 *
 * Cada objeto guarda uma referência à um objeto protótipo,
 * de onde ele pode herdar propriedades
 * por padrão o protótipo é Object.prototype,
 * mas um objeto pode ser escolhido como protótipo de outro
*/

Player = function(game) { this.favoriteGame = game };
Player.prototype = person;

player = new Player("tetris");
player.firstName // "Fulano"
player.favoriteGame // "tetris"

/*
 * Outra forma
 */
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  }
}

var employee = Object.create(person);
employee.job = "Developer"
employee.job // "Developer"
employee.firstName // "Fulano"
