"use strict";

$(document).ready(function() {
	console.log("jquery working");
	let robotContent = $("#robots");
	let robots = [];

	function getRobots() {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: "./robot.json"
			}).done(function(data) {
				resolve(data);
			}).fail(function(xhr, status, error) {
				reject(error);
			})
		})
	}
	getRobots().then(function(dataPass) {
		console.log("generate array", robots);
	});
		let robotData = "";
		var currentRobot;

		for (let i = 0; i < robots.length; i++) {
			currentRobot = robots[i];

			robotData += `<div>Robots</div>`;
		}
		robotContent.html(robotData)
		 console.log("robot data", robotData);
});