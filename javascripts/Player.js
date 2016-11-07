"use strict";

var Battlebot = Battlebot || {};
Battlebot.Combatants = {};

/*
  Define the base object for any player of Battlebot,
  whether a human player or a monster.
 */
Battlebot.Combatants.Player = function(name) {
  this.species = null;

  this.class = null;
  this.weapon = null;

  this.playerName = name || "";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.bot = ["viper drone", "stealth drone"];
  this.type = "Aerial";
  this.types = [this.type];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a(n) ",
      this.type,
      " attack by ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      " attacking with a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Battlebot.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Battlebot.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Battlebot.Dome[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
Battlebot.Combatants.Human = function() {
  var randomType;

  this.species = "Player 1";
  this.intelligence = this.intelligence + 20;

  this.types.push("Aerial", "Ground");
  randomType = Math.round(Math.random() * (this.types.length-1));
  this.type = this.types[randomType];

  this.allowedClasses = ["ViperDrone", "StealthDrone", "ViperTank"];
};
Battlebot.Combatants.Human.prototype = new Battlebot.Combatants.Player();


/*
  Define the base properties for a monster in a 
  constructor function.
 */
Battlebot.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Battlebot.Combatants.Monster.prototype = new Battlebot.Combatants.Player();



Battlebot.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Player 2";
  this.allowedClasses = ["ViperTank","StealthDrone"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Battlebot.Dome[randomClass]();
    return this.class;
  }
};

Battlebot.Combatants.Orc.prototype = new Battlebot.Combatants.Monster();

var Weapon = function() {
  this.name = "empty";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var MudSlinger = function() {
  this.name = "Mud Slinger";
  this.damage = 4;
  this.hands = 1;
};
MudSlinger.prototype = new Weapon();

var FlameThrower = function() {
  this.name = "Flame Thrower";
  this.damage = 14;
  this.hands = 2;
};
FlameThrower.prototype = new Weapon();

var MissileLauncher = function() {
  this.name = "Missile Launcher";
  this.damage = 8;
  this.hands = 2;
};
MissileLauncher.prototype = new Weapon();

// "use strict";

// var Battledome = Battledome || {};
// Battledome.BattleBot = {};

// Battledome.BattleBot.Player1 = function(name1) {
//   this.type = null;
//   this.class = null;
//   this.model_specialty = null;

//   this.player1Name = name1 || "leroy";
//   this.health = Math.floor(Math.random() * 40 + 50);
//   this.strength = 90;
//   this.totalDamage = 1;

//     var outputPlayer1 = [this.player1Name + " " + this.health];
//     // console.log(outputPlayer1);
//     return outputPlayer1;
// };

// Battledome.BattleBot.Player2 = function(name2) {
//   this.type = null;
//   this.class = null;
//   this.model_specialty = null;

//   this.player2Name = name2 || "Enemy's Tank";
//   this.health = Math.floor(Math.random() * 60 + 120);
//   this.strength = 180;
//   this.totalDamage = 1;

//     var outputPlayer2 = [this.player2Name + " " + this.health];
//     // console.log(outputPlayer2);
//     return outputPlayer2;
// };
// Battledome.BattleBot.Player1.prototype = new Battledome.BattleBot.Player1();
// Battledome.BattleBot.Player2.prototype = new Battledome.BattleBot.Player2();










// // drone {
// //     type: drone1;
// //   model_specialty: kicking ass
// // }

// // drone1 {
// //   type: drone1;
// //   class: drone;
// //   model_specialty: kicking ass
// //   this.health = Math.floor(Math.random() * 60 + 120);
// //   this.strength = 180;
// //   this.totalDamage = 1;
// // }
// // drone1 {
// //   class: drone;
// //   this.health = Math.floor(Math.random() * 60 + 120);
// //   this.strength = 180;
// //   this.totalDamage = 1;
// // }

/*
  TODO: Modularize this code with IIFE or Browserify
 */




