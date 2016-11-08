"use strict";

var Battlebot = Battlebot || {};
Battlebot.Dome = {};


Battlebot.Dome.PlayerFighter = function() {
  this.class = null;
  this.weapon = null;
  this.playerName = "";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.type = "";
  this.strength = 90;
  this.intelligence = 90;
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
};

Battlebot.Dome.Drone = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
  this.type="aerial";
};
Battlebot.Dome.Drone.prototype = new Battlebot.Dome.PlayerFighter();


Battlebot.Dome.Viper = function() {
  this.robotName = "viper drone";
  this.health += this.healthBonus + 25;
  this.strength += this.strengthBonus + 30;
};
Battlebot.Dome.Viper.prototype = new Battlebot.Dome.Drone();


Battlebot.Dome.Stealth = function() {
  this.robotName = "stealth drone";
  this.health += this.healthBonus + 20;
  this.strength += this.strengthBonus + 10;
};
Battlebot.Dome.Stealth.prototype = new Battlebot.Dome.Drone();

Battlebot.Dome.Drone1 = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
  this.type="aerial";
};
Battlebot.Dome.Drone1.prototype = new Battlebot.Dome.PlayerFighter();


Battlebot.Dome.Viper1 = function() {
  this.robotName = "viper drone1";
  this.health += this.healthBonus + 25;
  this.strength += this.strengthBonus + 30;
};
Battlebot.Dome.Viper1.prototype = new Battlebot.Dome.Drone1();


Battlebot.Dome.Stealth1 = function() {
  this.robotName = "stealth drone1";
  this.health += this.healthBonus + 20;
  this.strength += this.strengthBonus + 10;
};
Battlebot.Dome.Stealth1.prototype = new Battlebot.Dome.Drone1();

Battlebot.Dome.Drone2 = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
  this.type="aerial";
};
Battlebot.Dome.Drone2.prototype = new Battlebot.Dome.PlayerFighter();


Battlebot.Dome.Viper2 = function() {
  this.robotName = "viper drone2";
  this.health += this.healthBonus + 25;
  this.strength += this.strengthBonus + 30;
};
Battlebot.Dome.Viper2.prototype = new Battlebot.Dome.Drone2();


Battlebot.Dome.Stealth2 = function() {
  this.robotName = "stealth drone2";
  this.health += this.healthBonus + 20;
  this.strength += this.strengthBonus + 10;
};
Battlebot.Dome.Stealth2.prototype = new Battlebot.Dome.Drone2();