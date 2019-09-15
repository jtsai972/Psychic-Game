
//Basic Variables
let countWin, countLoss, countGuess, letter, guess;

//Printing function
var print = function() {
    //Setting scores
    document.getElementById("wins").innerHTML = countWin;
    document.getElementById("losses").innerHTML = countLoss;
    document.getElementById("guessCount").innerHTML= countGuess;

    //Printing guesses
    document.getElementById("guessHistory").innerHTML += " " + guess;
}
var check = function() {
    if (letter== guess) {
        countWin++;
    } else {
        countLoss++;
    }

    if (countGuess == 0) {
        
    }
}

// Initializing variables
countWin = countLoss = 0;
countGuess = 9;
letter = String.fromCharCode(97+Math.floor(Math.random() * 26));

//checking for letter
console.log(letter);

check();

// Printing results
print();