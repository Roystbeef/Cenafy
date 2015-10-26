$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
	if(chance === 69) {
		cenafy();
	}
});

var cenafy = function() {
	setTimeout(function() {
		window.location.href = "http://instantcena.com/";
	}, 20000);
};