$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
  // dont loop on instant cena
	if(chance === 69 && window.location.href.indexOf('instantcena') === -1) {
		cenafy();
	}
});

var cenafy = function() {
	setTimeout(function() {
		window.location.href = "http://instantcena.com/";
	}, 3000);
};