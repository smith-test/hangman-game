


/**----Cached Elements---- */
const startButtonEl = document.getElementById('startButton'); //variable for my Start Game button
const resetEl = document.getElementById('resetGame'); //reset game element
const hangmanStatusEl = document.getElementById('hangman').children;  //grabs the Hangman element
let messageEl = document.querySelector('.message-header');
const keyboardButtons = document.querySelectorAll(".keyboard button");
const randomWordEl = document.getElementById('randomWord');
const keyboardCont = document.querySelector('.keyboard');

startButtonEl.addEventListener('click', handleStart);  //event listener for my Start Game button
resetEl.addEventListener('click', resetGame);  //event listener for reseting game
keyboardButtons.forEach(button => button.addEventListener('click', grabLetter)); //using arrow function for event listener for keyboard clicks


/**-------State----------- */
let wrongGuesses = 0; //increment when letter is clicked and doesn't match 
let guessedLetters = []; //letters are added to array on letter click
const maxGuessesAllowed = 7; //HANGMAN has 7 letters

/**------------Random Word------------- */
//Below is where the random word will be broken out into Array
const randomWord = "AH";

/*--------------Logic---------- */
init();

function init() {
    document.querySelector('.message-header').innerHTML = "Welcome to HANGMAN game!"; //Displays Message when coming into game
    updateHangmanIndicator();
    displayKeyboard(false);
}

function renderMessage() {  //displays message after clicking Start and showing randomword
    messageEl.innerText = `Lets Begin! Below is your random word that contains ${randomWord.length} characters:`
}

//function to handle when user clicks Start Game
function handleStart() {
    document.getElementById('startButton').classList.add("startClicked");
    // showRandomWord();
    updateRandomWord();
    renderMessage();
    displayKeyboard(true);
};



//This function will handle the Hangman letters after each wrong guess
function updateHangmanIndicator() {
    for (let i = 0; i < wrongGuesses; i++) {
        hangmanStatusEl[i].style.color = 'red';
    }

};

//this function will reset the game
function resetGame() {
    //reset HangMan
    location.reload();  //this refreshes the browser


};
//keyboard letter click event handler
function grabLetter(event) {  //grabs the event "click"
    //disable the button clicked
    event.target.disabled = true;  //this will disable button clicked

    if (randomWord.toUpperCase().includes(event.target.textContent)) {
        guessedLetters.push(event.target.textContent);
        updateRandomWord();
        checkWin();
    } else {
        wrongGuesses++
        updateHangmanIndicator();
        checkLoss();
    }
};

function updateRandomWord() {
    //replace underline with letter guessed correctly with ternary operator
    randomWordEl.textContent = randomWord.split("").map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");   //mapping values from array to the value in textContent
};

function checkWin() {
    if (randomWordEl.textContent.replace(/ /g, "") === randomWord) {   //used stackOverflow to figure out how to remove the spaces from the array to match the variable https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with
        messageEl.innerText = `You got it!`;
        displayKeyboard(false);
    };
};
function checkLoss() {
    if (wrongGuesses >= maxGuessesAllowed) {
        messageEl.innerText = `Go buy a dictionary`;
        displayKeyboard(false);
        //display message stating they have guessed the max (this is where Hangman should be fully shown)

    }
};

function displayKeyboard(value) {
    if (value === false) {
        keyboardCont.style.display = 'none';
    } else {
        keyboardCont.style.display = 'block';
    }
}