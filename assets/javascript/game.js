
	var alphabet = "qwertyuiopasdfghjklzxcvbnm";
	var rand = Math.floor((Math.random()*26));
	var letter = alphabet.charAt(rand);
	console.log(letter);

	var test = "test";

	var winNum = "0";
	var loseNum = "0";
	var userGuess = "";
	var maxGuess = "10";

	document.onkeyup = function(event) {
		var userLetter = event.key;
		console.log(userLetter);
	}
