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
		

		fightDisplay.html(`
			<div class="left">
			<h3>${Champion1.playerName}</h3>
			<div> is driving a: ${Champion1.robotName}</div>
			<div> with a: ${player1Weapon}</div>
			<div>Starting Health: ${Champion1.health}</div>
			<div>Strength: ${Champion1.strength}</div>
			</div>

			<div class="right">
			<h3>${Champion2.playerName}</h3>
			<div> is driving a: ${Champion2.robotName}</div>
			<div> with a: ${player2Weapon}</div>
			<div>Starting Health: ${Champion2.health}</div>
			<div>Strength: ${Champion2.strength}</div>
			</div>
			`);
	});

	$("#player-setup").show();

	let fightDisplay = $("#fightResults");
	$(FightBtn).on("click", function() {

		$(fightDisplay).append(`<h5 class ="fightDiv">Player 1 health after attack: </h5>`, Champion1.health -= Champion2.weapon.damage, '<br>');
		$(fightDisplay).append(`<h5>Player 2 health after attack: </h5>`, Champion2.health -= Champion1.weapon.damage, '<br>');

		if(Champion1.health <= 20) {
			$(fightDisplay).append(`<h3>Player 1 loses!</h3>`);
		}

		if(Champion2.health <= 20) {
			$(fightDisplay).append(`<h3>Player 2 loses!</h3>`);
		}

		
	});
});



