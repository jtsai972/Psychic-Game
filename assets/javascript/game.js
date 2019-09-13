
//Basic Variables
let countWin, countLoss, countGuess, letter, guesses;

//Printing function
var print = function() {
    document.getElementById("wins").innerHTML = countWin;
    document.getElementById("losses").innerHTML = countLoss;
    document.getElementById("guessCount").innerHTML= countGuess;
}
var check = function() {
    
}

// Initializing variables
countWin = countLoss = 0;
countGuess = 9;
letter = String.fromCharCode(97+Math.floor(Math.random() * 26));

//checking for letter
console.log(letter);

// Printing results
print();