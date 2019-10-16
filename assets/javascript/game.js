
//Basic Variables
let countWin, countLoss, countGuess, letter, guess;

// Initializing variables
countWin = countLoss = 0;
countGuess = 9;
guess = " ";

let guessHistory = document.getElementById("guessHistory");

var rndGen = () => {
    letter = String.fromCharCode(97+Math.floor(Math.random() * 26));
}

//Printing function
var print = function() {
    //Setting scores
    document.getElementById("wins").innerHTML = countWin;
    document.getElementById("losses").innerHTML = countLoss;
    document.getElementById("guessCount").innerHTML= countGuess;

    //Printing guesses
    guessHistory.innerHTML += guess;
}

var check = function() {
    if (letter== guess) {
        //add a win
        countWin++;
        
        alert("Congratulations! You guessed correctly!") ;
        
        //select a new letter
        reset();        
    }

    if (countGuess <= 0) {
        //add a loss
        countLoss++;
        
        //reset info
        reset();
    }
}

var reset = function() {
    guess = " ";
    countGuess= 9;
    rndGen();
    guessHistory.innerHTML = " ";

    //checking for letter
    console.log(letter); 
}

rndGen();

print();

//checking for letter
console.log(letter);

document.addEventListener(
    'keypress', function(event) {
        //setting guess for comparison
        guess = String.fromCharCode(event.keyCode).toLowerCase();

        //counting guesses
        countGuess--;

        check(); //check what is pressed
        print (); //print result
    }
);