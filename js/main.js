


/**----Cached Elements---- */
const startButtonEl = document.getElementById('startButton'); //variable for my Start Game button
const submitLetterEl = document.getElementById('submitLetter');
const submitAnswerEl = document.getElementById('submitAnswer');
const restartEl = document.getElementById('restartGame');
const quitGame = document.getElementById('quitGame');
const hangmanStatus = document.getElementById('hangman');

startButtonEl.addEventListener('click', handleStart);  //event listener for my Start Game button
submitLetterEl.addEventListener('click', submittedLetter);
submitAnswerEl.addEventListener('click', submittedAnswer);
restartEl.addEventListener('click', restartGame);
quitGame.addEventListener('click', quitGame);


/**-------State----------- */
const hangman = "HANGMAN"
let hangmanIndicator = [
    [''], [''], [''], [''], [''], [''], [''],
];
hangmanIndicator = hangman.split('');


let myGuess = document.getElementById('nextLetter').value;
let finalAnswer = document.getElementById('finalAnswer').value
let message


/**------------Random Word------------- */
//Below is where the random word will be broken out into Array
let arr = []
const randomWord = "Sunflower"
//arr += randomWord
arr = randomWord.split("");

/**===Message----- */
message = ("Welcome to Hangman!  Please enter your next guess.")
let displayMessage = document.getElementsByTagName('h4').textContent = message

/**---Letters Submitted---- */
let usedLetters = []   //created the array for letters submtted
usedLetters.push(myGuess);  //update the array with user's guesses


/*--------------Logic---------- */
main ()


function main () {
    
  // while (myGuess == hangmanIndicator) {
        console.log(`${myGuess} is correct`);
    } 
  //  if

    console.log(`${myGuess} is incorrect`);
   // renderGame();
};


function renderGame() {
    //this will start the game and present the Title and Start button
    updateHangmanIndicator();
    console.log(`${usedLetters} blah blah`);
}

//function to handle when user clicks Start Game
function handleStart() {
    console.log("User clicked Start");
    renderGame();
}

function submittedLetter() {
    let myGuess = document.getElementById('nextLetter').value;
    if(myGuess !== usedLetters) {
        updateLettersSubmitted();
    }else
    console.log('you aleady guessed that');
    updateLettersSubmitted();

}

function submittedAnswer() {
    if (finalAnswer === randomWord) {
        //congrats you got it right displayed
        //fill in answer array
    }
}
function updateLettersSubmitted() {
    let usedLetterUl = document.getElementById('letters');
    if (myGuess !== usedLetters) {
        //add myGuess to Letters Submitted Box
        usedLetterUl = usedLetters;
        console.log(usedLetters);
    }else
    message = (`You have already guessed ${myguess}. Please guess another letter`);
}

function updateHangmanIndicator(){
    hangmanStatus.innerText = hangman;
    console.log(hangmanStatus);

}
