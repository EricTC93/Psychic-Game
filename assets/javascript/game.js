
	// Declaring Variables
	var alphabet = "qwertyuiopasdfghjklzxcvbnm";
	var winNum = 0;
	var loseNum = 0;
	var userGuess = "";
		document.getElementById("userGuess").textContent = userGuess;
	var maxGuess = 10;
	var guessesLeft = maxGuess;
		document.getElementById("guessesLeft").textContent = guessesLeft;
	var gameOver = false;

	// Generates random letter to guess
	var rand = Math.floor((Math.random()*26));
	var letter = alphabet.charAt(rand);
	console.log(letter);

	document.onkeyup = function(event) {
		var userLetter = event.key;

		// Checks for valid input
		if(alphabet.indexOf(userLetter) == -1) {
				return;
		}

		// Game does not continue if user has no guesses left
		if (guessesLeft > 0) {

			console.log(userLetter);
			
			if (guessesLeft != maxGuess) {
				userGuess = userGuess + ",";
			}

			// Prints strings of guesses
			userGuess = userGuess + userLetter;
			document.getElementById("userGuess").textContent = userGuess;

			// Decrease the amount of guesses the user has
			guessesLeft--;
			document.getElementById("guessesLeft").textContent = guessesLeft;
		}
	}
