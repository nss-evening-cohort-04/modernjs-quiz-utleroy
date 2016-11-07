
"use strict";

$(document).ready(function() {
	let player1Name = "";
	let player2Name = "";
	let player1 = {};
	let player2 = {};

	let PlayerName = "";
	let PlayerType = "";
	let WeaponName = "";
	let FightBtn = $(".fight-button");
	let EnterBtn = $(".enter-button");

	$(EnterBtn).on("click", function() {

		player1Name = $("#player1Name").val();
		player2Name = $("#player2Name").val();

		let player1Select = $("#player1Select").find(":selected").val();
		player1.type = player1Select;

		let player2Select = $("#player2Select").find(":selected").val();
		player2.robot = player2Select;

		// $("div").removeClass("select-elements");

		console.log("player 1 name value", player1Name);
		console.log("player 2 name value", player2Name);
		console.log("player 1 select value", player1Select);

	});

	let player1options = $("#player1Select");

	player1options.html(`	<option>Robot</option>
		<option>Tank</option>
		<option>ATV</option>`);

	let player2options = $("#player2Select");

	player2options.html(`	<option>Robot</option>
		<option>Tank</option>
		<option>ATV</option>`);

	$("#player-setup").show();

	$(FightBtn).on("click", function(fight) {
		var player1 = new Battlebot.Combatants.Human();
		player1.generateClass();
		player1.setWeapon(new MudSlinger());
		console.log(player1.toString());

		var player2 = new Battlebot.Combatants.Orc();
		player2.generateClass();
		player2.setWeapon(new FlameThrower());
		console.log(player2.toString());
		return fight;
	});


});

// "use strict";

// $(document).ready(function() {

// 	let player1Name = "";
// 	let player2Name = "";
// 	let fightBtn = $("#fight-btn");
// 	let player1 = {};
// 	let player2 = {};

// 	let player1options = $("#player1Select");

// 	player1options.html(`	<option>Robot</option>
// 		<option>Tank</option>
// 		<option>ATV</option>`);

// 	let player2options = $("#player2Select");

// 	player2options.html(`	<option>Robot</option>
// 		<option>Tank</option>
// 		<option>ATV</option>`);

// 	player1Name = $("#player1Name").val();
// 	player2Name = $("#player2Name").val();

// 	let player1Select = $("#player1Select").find(":selected").val();
// 	player1.type = player1Select;

// 	let player2Select = $("#player2Select").find(":selected").val();
// 	player2.robot = player2Select;

// 	console.log("player 1 name value", player1Name);
// 	console.log("player 2 name value", player2Name);
// 	console.log("player 1 select value", player1Select);


// 	let battleview = $("#fightResults");
// 	battleview.html(`
// 		<div>
// 		Intitial Player1 Health: <br>
// 		<h3>${player1Name}</h3>

// 		<h3>${player1Select}</h3>
// 		<h1>${Battledome.BattleBot.Player1()}</h1> <br>

// 		Intitial Player2 Health: <br>
// 		<h1>${Battledome.BattleBot.Player2()}</h1> <br>
// 		`
// 		);

// 	$(fightBtn).on("click", function() {
// 	});

// });	

