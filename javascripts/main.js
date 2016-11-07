"use strict";

$(document).ready(function() {

	let Bots = {};

	let player1Name = "";
	let player2Name = "";
	let fightBtn = $("#fight-btn");
	let player1 = {};
	let player2 = {};

	$(fightBtn).click(function() {
		player1.name = $("#player1Name").val();
		player2.name = $("#player2Name").val();
		
    let player1Select = $("#player1Select").find(":selected").val();
    player1.type = player1Select;

    let player2Select = $("#player2Select").find(":selected").val();
    player2.robot = player2Select;

		console.log("player name value", player1.name, player2.name);
		// console.log("player type", player1, player2);
		return player.name;
	});

	let battleview = $("#fightResults");
	battleview.html(`
		<div>
		Intitial Player1 Health: <br>
		<h1>${Battledome.BattleBot.Player1()}</h1> <br>
		
		Intitial Player2 Health: <br>
		<h1>${Battledome.BattleBot.Player2()}</h1> <br>
		`
		);


});	