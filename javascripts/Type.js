var Battledome = Battledome || {};
Battledome.Arena = {};

Battledome.Arena.Robot = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Battledome.Arena.Robot.prototype = new Battledome.Arena.PlayerClass();


Battledome.Arena.Drone = function() {
  this.name = "Drone";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.model_specialty = flamethrower;
};
Battledome.Arena.Drone.prototype = new Battledome.Arena.Robot();


Battledome.Arena.Tank = function() {
  this.name = "Tank";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Battledome.Arena.Tank.prototype = new Battledome.Arena.Robot();


Battledome.Arena.ATV = function() {
  this.name = "ATV";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Battledome.Arena.ATV.prototype = new Battledome.Arena.Robot();

