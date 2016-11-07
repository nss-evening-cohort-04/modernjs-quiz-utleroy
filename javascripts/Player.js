"use strict";

var Battledome = Battledome || {};
Battledome.BattleBot = {};

Battledome.BattleBot.Player1 = function(name1) {
  this.type = null;
  this.class = null;
  this.model_specialty = null;

  this.player1Name = name1 || "leroy";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.strength = 90;
  this.totalDamage = 1;

    var outputPlayer1 = [this.player1Name + " " + this.health];
    // console.log(outputPlayer1);
    return outputPlayer1;
};

Battledome.BattleBot.Player2 = function(name2) {
  this.type = null;
  this.class = null;
  this.model_specialty = null;

  this.player2Name = name2 || "Enemy's Tank";
  this.health = Math.floor(Math.random() * 60 + 120);
  this.strength = 180;
  this.totalDamage = 1;

    var outputPlayer2 = [this.player2Name + " " + this.health];
    // console.log(outputPlayer2);
    return outputPlayer2;
};
Battledome.BattleBot.Player1.prototype = new Battledome.BattleBot.Player1();
Battledome.BattleBot.Player2.prototype = new Battledome.BattleBot.Player2();










// drone {
//     type: drone1;
//   model_specialty: kicking ass
// }

// drone1 {
//   type: drone1;
//   class: drone;
//   model_specialty: kicking ass
//   this.health = Math.floor(Math.random() * 60 + 120);
//   this.strength = 180;
//   this.totalDamage = 1;
// }
// drone1 {
//   class: drone;
//   this.health = Math.floor(Math.random() * 60 + 120);
//   this.strength = 180;
//   this.totalDamage = 1;
// }
