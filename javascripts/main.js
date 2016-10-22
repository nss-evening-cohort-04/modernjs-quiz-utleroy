"use strict";

$(document).ready(function() {
	let robotContent = $("#robots");
	let robots = [];

	function RobotsPopulate() {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: "../robots.json"
			}).done(function(data) {
				resolve(data);
			}).fail(function(xhr, status, error) {
				reject(error);
			})
		})
	}
	RobotsPopulate().then(function(dataPass) {
		console.log(dataPass)
	});
	let robotData = "";

	for (let i = 0; i < robots.length; i++) {
		let currentRobot = robots[i];

		robotData += "<div></div>";
	}
	robotContent.html(robotData);
});