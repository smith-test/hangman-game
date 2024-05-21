const prompt = require('prompt-sync')();


console.log('Here is my hangman game')

/**----Cached Elements---- */
const startButtonEl = document.getElementById('startButton');
// const submitLetterEl = document.getElementById('submitLetter');
// const response = document.querySelector('h4.message-header');
// const randomWord = document.querySelector('h3.randomWord')

startButtonEl.addEventListener('click', handleStart);
// submitLetterEl.addEventListener('click', submitLetter)
/**-------State----------- */

const hangman = [
    ['H'], //starts at array 0
    ['d'], 
    ['s'], 
    ['d'], 
    ['d'], 
    ['d'], 
    ['d'],
];

let correctLetter = true
let correctAnswer = true
 


/*--------------Logic---------- */
main ()


function main () {
    
    while(!correctAnswer) {
        response = (`${answer}Not the correct Answer`);
        //change hangman to highlight next letter
        //Display Quit Button
        //Display Continue Button
    } 
    
    while(!correctLetter) {
        response = (`${letter} is incorrect`);
        //change hangman to highlight next letter
         //Display Quit Button
        //Display Continue Button
    }
};

function renderAnswer() {
    console.log(correctAnswer)
}

function renderLetter() {
    console.log(correctLetter)
}

function renderGame() {
    //this will start the game and present the Title and Start button
}

//function to handle when user clicks Start Game
function handleStart() {
    console.log("User clicked Start");
}

function submitLetter() {
    console.log("user submitted Letter")
}