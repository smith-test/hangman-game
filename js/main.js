


/**----Cached Elements---- */
const startButtonEl = document.getElementById('startButton'); //variable for my Start Game button
const resetEl = document.getElementById('resetGame');
const hangmanStatusEl = document.getElementById('hangman');
const message = ("Welcome to Hangman! Here is your Word: ")
//let letterEl = document.querySelector('.keyboard')  //grabbing the keyboard letters

startButtonEl.addEventListener('click', handleStart);  //event listener for my Start Game button
resetEl.addEventListener('click', resetGame);  //event listener for reseting game
//letterEl.addEventListener('click', grabLetter); //event listener for keyboard clicks

/**-------State----------- */
let wrongGuesses = 0;


/**------------Random Word------------- */
//Below is where the random word will be broken out into Array
let arr = []
const randomWord = ("Sunflower")
arr += randomWord.replace(',' , '');
//arr = randomWord.split('').replace(',' , '');

/*--------------Logic---------- */
init ()


function init () {
    grabLetter();
    
   };



//function to handle when user clicks Start Game
function handleStart() {
    document.getElementById('startButton').classList.add("startClicked");
    document.querySelector('.message-header').innerHTML = message;
    showRandomWord();
}

//Once Start is clicked, the random word box will show
function showRandomWord() {
    document.getElementById('randomWord').classList.add("showWordBorder");
    console.log(arr);
    document.querySelector('.randomWord').innerHTML = arr;
}

//This function will handle the Hangman letters after each wrong guess
function updateHangmanIndicator(){
    document.getElementById('hangman').getElementsByTagName('span')[wrongGuesses - 1].classList.add("wrong");
    console.log(hangmanStatusEl);

}

//this function will reset the game
function resetGame(){   
    //reset HangMan
    location.reload();  //this refreshes the browser

}

function grabLetter() {
   document.onkeydown = function(evt) {
    const key = evt.key;
    if(key.length !== 1 || key.valueOf(String)) {
        console.log(`${key} "is a letter"`);

    } else {
        document.querySelector('.message-header').innerHTML = ("Reset and Start Game then Enter a single letter only")
    }

   }
   
}
