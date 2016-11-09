"use strict";

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
		<option>FlameThrower</option>
		<option>MudSlinger</option>
		<option>MissileLauncher</option>
		<option>Gun</option>
		<option>Stones</option>
		<option>Bubbles</option>`);