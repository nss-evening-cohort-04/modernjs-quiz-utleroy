"use strict";

$(document).ready(function() {

	let player1Name = "";
	let player2Name = "";
	let results = $("#fightResults");
	let fightBtn = $("#fight-btn");
	let player1 = {};
	let player2 = {};

	$(fightBtn).click(function() {
		player1.name = $("#player1Name").val();
		player2.name = $("#player2Name").val();
		
    let player1Select = $("#player1Select").find(":selected").val();
    player1.type = player1Select;

    let player2Select = $("#player2Select").find(":selected").val();
    player2.type = player2Select;

		console.log("player values", player1, player2);
	});
});	