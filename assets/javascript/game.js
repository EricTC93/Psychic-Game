	
	// Declaring Variables
	var alphabet = "qwertyuiopasdfghjklzxcvbnm";
	var winNum = 0;
	var loseNum = 0;
	var userGuess = "";
		document.getElementById("userGuess").textContent = userGuess;
	var maxGuess = 10;
	var guessesLeft = maxGuess;
		document.getElementById("guessesLeft").textContent = guessesLeft;
	// var gameOver = false;
	var userLetter;

	// Generates random letter to guess
	var rand = Math.floor((Math.random()*26));
	var comLetter = alphabet.charAt(rand);
	console.log(comLetter);

	// Takes letter input from the user
	document.onkeyup = function(event) {
		userLetter = event.key;

		// Game does not continue if user has no guesses left
		if (guessesLeft > 0) {

			// Checks for valid input
			if(alphabet.indexOf(userLetter) == -1 || repeatGuess()) {
				return;
			}

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

			// Ends round if user guesses right
			if (userLetter === comLetter) {
				winNum++;
				document.getElementById("winNum").textContent = winNum;
				resetGame();
			}
		}

		if (guessesLeft === 0) {
			loseNum++;
			document.getElementById("loseNum").textContent = loseNum;
			resetGame();
		}

	}

	// Resets key variables to start the game over
	function resetGame() {
		userGuess = "";
		document.getElementById("userGuess").textContent = userGuess;

		guessesLeft = maxGuess;
		document.getElementById("guessesLeft").textContent = guessesLeft;

		rand = Math.floor((Math.random()*26));
		comLetter = alphabet.charAt(rand);
		console.log(comLetter);

	}

	function repeatGuess () {
		if (userGuess.indexOf(userLetter) != -1) {
			return true;
		}

		return false;
	}
