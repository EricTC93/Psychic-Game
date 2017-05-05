
	var alphabet = "qwertyuiopasdfghjklzxcvbnm";
	var rand = Math.floor((Math.random()*26));
	var letter = alphabet.charAt(rand);
	console.log(letter);

	var test = "test"

	document.write("<h1> The Psychic Game </h1>") 
	document.write("<p> Guess what letter I'm thinking of </p>");

	document.write("<p> Wins: </p>") 

	document.write("<p> Losses: </p>") 

	document.write("<p> Guesses left: </p>") 

	document.write("<p> Guesses: " + test + "</p>") 
