


/**----Cached Elements---- */
const startButtonEl = document.getElementById('startButton'); //variable for my Start Game button
const restartEl = document.getElementById('restartGame');
const quit = document.getElementById('quitGame');
const hangmanStatus = document.getElementById('hangman');

startButtonEl.addEventListener('click', handleStart);  //event listener for my Start Game button
restartEl.addEventListener('click', restartGame);
quit.addEventListener('click', quitGame);


/**-------State----------- */
let wrongGuesses = 0;
let message;


/**------------Random Word------------- */
//Below is where the random word will be broken out into Array
let arr = []
const randomWord = ("Sunflower")
arr += randomWord.replace(',' , '');
//arr = randomWord.split('').replace(',' , '');

/**===Message----- */
message = ("Welcome to Hangman!")
let displayMessage = document.getElementsByTagName('h3').textContent = message


/*--------------Logic---------- */
init ()


function init () {
    console.log(message);
    
   };

//function to handle when user clicks Start Game
function handleStart() {
    document.getElementById('startButton').classList.add("startClicked");
    console.log("User clicked Start");
    showRandomWord();
}

function showRandomWord() {
    console.log(arr);
    document.querySelector('.randomWord').innerHTML = arr;
}


function updateHangmanIndicator(){
   
    document.getElementById('hangman').getElementsByTagName('span')[wrongGuesses - 1].classList.add("wrong");
    console.log(hangmanStatus);

}

function quitGame(){
    message = ("Welcome to Hangman")
    //reset HangMan
    //remove random word (if needed)
    location.reload();  //this refreshes the browser

}

function restartGame() {
    console.log("restart the game");
    location.reload();
    init;
};

