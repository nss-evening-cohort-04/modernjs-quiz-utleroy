"use strict";

$(document).ready(function() {

	let player1Name = "";
	let player2Name = "";
	let fightBtn = $("#fight-btn");
	let player1 = {};
	let player2 = {};

	let player1options = $("#player1Select");

		player1options.html(`	<option>Robot</option>
													<option>Tank</option>
													<option>ATV</option>`);

	let player2options = $("#player2Select");

		player2options.html(`	<option>Robot</option>
													<option>Tank</option>
													<option>ATV</option>`);

	$(fightBtn).click(function(player) {
		player1Name = $("#player1Name").val();
		player2Name = $("#player2Name").val();
		
    let player1Select = $("#player1Select").find(":selected").val();
    player1.type = player1Select;

    let player2Select = $("#player2Select").find(":selected").val();
    player2.robot = player2Select;

		console.log("player 1 name value", player1Name);
		console.log("player 2 name value", player2Name);
		console.log("player 1 select value", player1Select);
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