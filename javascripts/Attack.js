"use strict";

var Battlebot = Battlebot || {};
Battlebot.weapons = {};


Battlebot.weapons.Weapon = function() {
  this.name = "empty";
  this.damage = 1;

  this.buildString = function() {
    return this.name;
  };
};

Battlebot.weapons.CloseRange = function() {
  this.bonusDamage = 1;
};
Battlebot.weapons.CloseRange.prototype = new Battlebot.weapons.Weapon();

Battlebot.weapons.MudSlinger = function() {
  this.name = "Mud Slinger";
  this.damage = 4 + this.bonusDamage;
};
Battlebot.weapons.MudSlinger.prototype = new Battlebot.weapons.CloseRange();

Battlebot.weapons.FlameThrower = function() {
  this.name = "Flame Thrower";
  this.damage = 14 + this.bonusDamage;
};
Battlebot.weapons.FlameThrower.prototype = new Battlebot.weapons.CloseRange();

Battlebot.weapons.MissileLauncher = function() {
  this.name = "Missile Launcher";
  this.damage = 8 + this.bonusDamage;
};
Battlebot.weapons.MissileLauncher.prototype = new Battlebot.weapons.CloseRange();

Battlebot.weapons.LongRange = function () {
  this.bonusDamage = 2;
};
Battlebot.weapons.LongRange.prototype = new Battlebot.weapons.Weapon();

Battlebot.weapons.Gun = function() {
  this.name = "Gun";
  this.damage = 4 + this.bonusDamage;
};
Battlebot.weapons.Gun.prototype = new Battlebot.weapons.LongRange();

Battlebot.weapons.Stones = function() {
  this.name = "Stones";
  this.damage = 14 + this.bonusDamage;
};
Battlebot.weapons.Stones.prototype = new Battlebot.weapons.LongRange();

Battlebot.weapons.Bubbles = function() {
  this.name = "Bubbles";
  this.damage = 8 + this.bonusDamage;
};
Battlebot.weapons.Bubbles.prototype = new Battlebot.weapons.LongRange();
