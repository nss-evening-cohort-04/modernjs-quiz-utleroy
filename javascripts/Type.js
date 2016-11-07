"use strict";

var Battlebot = Battlebot || {};
Battlebot.Dome = {};


Battlebot.Dome.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

Battlebot.Dome.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Battlebot.Dome.Fighter.prototype = new Battlebot.Dome.PlayerClass();


Battlebot.Dome.ViperDrone = function() {
  this.name = "viper drone";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Battlebot.Dome.ViperDrone.prototype = new Battlebot.Dome.Fighter();


Battlebot.Dome.StealthDrone = function() {
  this.name = "stealth drone";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Battlebot.Dome.StealthDrone.prototype = new Battlebot.Dome.Fighter();

Battlebot.Dome.ViperTank = function() {
  this.name = "viper tank";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Battlebot.Dome.ViperTank.prototype = new Battlebot.Dome.Fighter();


// var Battledome = Battledome || {};
// Battledome.Arena = {};

// Battledome.Arena.Robot = function() {
//   this.healthBonus = 20;
//   this.strengthBonus = 10;
// };
// Battledome.Arena.Robot.prototype = new Battledome.Arena.PlayerClass();


// Battledome.Arena.Drone = function() {
//   this.name = "Drone";
//   this.healthBonus = this.healthBonus + 25;
//   this.strengthBonus = this.strengthBonus + 30;
//   this.model_specialty = flamethrower;
// };
// Battledome.Arena.Drone.prototype = new Battledome.Arena.Robot();


// Battledome.Arena.Tank = function() {
//   this.name = "Tank";
//   this.healthBonus = this.healthBonus + 20;
//   this.strengthBonus = this.strengthBonus + 10;
// };
// Battledome.Arena.Tank.prototype = new Battledome.Arena.Robot();


// Battledome.Arena.ATV = function() {
//   this.name = "ATV";
//   this.healthBonus = this.healthBonus + 35;
//   this.strengthBonus = this.strengthBonus + 20;
// };
// Battledome.Arena.ATV.prototype = new Battledome.Arena.Robot();




