


/**----Cached Elements---- */
const startButtonEl = document.getElementById('startButton'); //variable for my Start Game button
const resetEl = document.getElementById('resetGame'); //reset game element
const hangmanStatusEl = document.getElementById('hangman').children;  //grabs the Hangman element
const message = ("Welcome to Hangman! Here is your Word: ");//Message to user
const keyboardButtons = document.querySelectorAll(".keyboard button");

startButtonEl.addEventListener('click', handleStart);  //event listener for my Start Game button
resetEl.addEventListener('click', resetGame);  //event listener for reseting game
keyboardButtons.forEach(button => button.addEventListener('click', grabLetter)); //event listener for keyboard clicks


/**-------State----------- */
let wrongGuesses = 0; //increment when letter is clicked and doesn't match 
let guessedLetters = []; //letters are added to array on letter click
const maxGuessesAllowed = 7; //HANGMAN has 7 letters

/**------------Random Word------------- */
//Below is where the random word will be broken out into Array
let arr = [];
const randomWord = ("Sunflower");
arr += randomWord.replace(',' , '');
//arr = randomWord.split('').replace(',' , '');

/*--------------Logic---------- */
init ();


function init () {
    grabLetter();
    
   };


//function to handle when user clicks Start Game
function handleStart() {
    document.getElementById('startButton').classList.add("startClicked");
    document.querySelector('.message-header').innerHTML = message;
    showRandomWord();
};

//Once Start is clicked, the random word box will show
function showRandomWord() {
    document.getElementById('randomWord').classList.add("showWordBorder");
    console.log(arr);
    document.querySelector('.randomWord').innerHTML = arr;
};

//This function will handle the Hangman letters after each wrong guess
function updateHangmanIndicator(){
    //somehow update wrongGuesses to the count of bad guess
    document.getElementById('hangman').getElementsByTagName('span')[wrongGuesses - 1].classList.add("wrong");
    console.log(hangmanStatusEl);

};

//this function will reset the game
function resetGame(){   
    //reset HangMan
    location.reload();  //this refreshes the browser

};

function grabLetter(event) {
   //disable the button clicked
   for (let i = 0; i < keyboardButtons.length; i++) {
   keyboardButtons[i].classList.add("changeButton")
   }
   //get letter from keyboardButtons
   let letter = keyboardButtons;
   console.log(letter);
   if (randomWord.includes(letter)) {
    //update the Random Word by highlighting the correct letter
    //arr.forEach

    //add letter to guessedLetters array

    checkWin();
   } else 
    //update wrongGUesses
    //update HangmanIndicator
    //checkLoss function to see if lost
    checkLoss();
};

 function updateRandomWord (){
    //replace underline with letter guessed correctly

 };

function checkWin() {
    //this will check to see if the randomWord has been guessed and if so
    //present Message stating they won
};
function checkLoss() {
    if (wrongGuesses !== maxGuessesAllowed){
        //allow user to continue

    }else {
    //disable keyboard keys
    //display message stating they have guessed the max (this is where Hangman should be fully shown)
    }
};