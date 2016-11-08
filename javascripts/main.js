"use strict";

$(document).ready(function() {
	let player1Name = "";
	let player2Name = "";
	let Champion1 = "";
	let Champion2 = "";
	let FightBtn = $(".fight-button");
	let EnterBtn = $(".enter-button");

	$(EnterBtn).on("click", function() {


		player1Name = $("#player1Name").val();
		player2Name = $("#player2Name").val();

		let player1Select = $("#player1Select").find(":selected").val();
		Champion1 = new Battlebot.Dome[player1Select]();
		Champion1.playerName = player1Name;
		console.log("Champion1" ,Champion1);


		let player2Select = $("#player2Select").find(":selected").val();
		Champion2 = new Battlebot.Dome[player2Select]();
		Champion2.playerName = player2Name;
		console.log("Champion2" ,Champion2);

		let player1Weapon = $("#player1Weapon").find(":selected").val();
		console.log("player1Weapon", player1Weapon);
		Champion1.weapon = new Battlebot.weapons[player1Weapon]();

		let player2Weapon = $("#player2Weapon").find(":selected").val();
		console.log("player2Weapon", player2Weapon);
		Champion2.weapon = new Battlebot.weapons[player2Weapon]();
		

		let output = fightDisplay.html(`
			<h3>${Champion1.playerName}</h3>
			<div> is driving a: ${Champion1.robotName}</div>
			<div> with a: ${player1Weapon}</div>
			<div>Starting Health: ${Champion1.health}</div>
			<div>Strength: ${Champion1.strength}</div>

			<h3>${Champion2.playerName}</h3>
			<div> is driving a: ${Champion2.robotName}</div>
			<div> with a: ${player2Weapon}</div>
			<div>Starting Health: ${Champion2.health}</div>
			<div>Strength: ${Champion2.strength}</div>
			`);
	});

	let player1options = $("#player1Select");
	player1options.html(`	<option disabled>select your robot</option>
		<option>Viper</option>
		<option>Stealth</option>
		<option>Viper1</option>
		<option>Stealth1</option>
		<option>Viper2</option>
		<option>Stealth2</option>
		`);

	let player2options = $("#player2Select");
	player2options.html(`	<option disabled>select your robot</option>
		<option>Viper</option>
		<option>Stealth</option>
		<option>Viper1</option>
		<option>Stealth1</option>
		<option>Viper2</option>
		<option>Stealth2</option>`);

	let player1Weapon = $("#player1Weapon");
	player1Weapon.html(`	<option disabled>select your weapon</option>
		<option>MudSlinger</option>
		<option>FlameThrower</option>
		<option>MissileLauncher</option>
		<option>Gun</option>
		<option>Stones</option>
		<option>Bubbles</option>`);

	let player2Weapon = $("#player2Weapon");
	player2Weapon.html(`	<option disabled>select your weapon</option>
		<option>MudSlinger</option>
		<option>FlameThrower</option>
		<option>MissileLauncher</option>
		<option>Gun</option>
		<option>Stones</option>
		<option>Bubbles</option>`);

	$("#player-setup").show();

	let fightDisplay = $("#fightResults");
	$(FightBtn).on("click", function() {

		Champion1.health -= Champion2.weapon.damage;
		Champion2.health -= Champion1.weapon.damage;

		if(Champion1.health <= 0 || Champion2.health <= 0) {
			$(fightDisplay).append("Winner!");
		}

	});
});



