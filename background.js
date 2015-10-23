$(document).ready(function() {
	origSpook();
});

var generateHTML = function() {
	var html = "<img src='https://raw.githubusercontent.com/Roystbeef/Spoookify/master/john_cena.gif' style='height: 100vh; width: 100vw'></img>";
	html += "<audio id='scream' src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/john_cena.mp3'></audio>";
	return html;
};

var playAudio = function () {
	document.getElementById('scream').play();
};

var spook = function() {
	var html = generateHTML();
	$('body').html(html);
	playAudio();
	setTimeout(function() {
		window.location.replace(document.URL);
	}, 2000);
};

var origSpook = function() {
	var chance = Math.floor(Math.random() * 1000);
	if(chance == 69) {
		spook();
	}
};
