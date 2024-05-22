const prompt = require('prompt-sync')();


console.log('Here is my hangman game')

/**----Cached Elements---- */
//const startButtonEl = document.getElementById('startButton');


//startButtonEl.addEventListener('click', handleStart);

/**-------State----------- */

const hangmanIndicator = [
    [''], //starts at array 0
    [''], 
    [''], 
    [''], 
    [''], 
    [''], 
    [''],
];

let nextGuess = document.getElementById('nextLetter')
let correctLetter = true
let correctAnswer = true

//Below is where the random work will be broken out into Array
let arr = []
const randomWord = "Sunflower"
//arr += randomWord
arr = randomWord.split("");

/*--------------Logic---------- */
main ()


function main () {
    console.log(hangmanIndicator);
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
    const nextGuess = prompt("enter a letter:  ")
    if (nextGuess === 'b') {
        console.log(`${nextGuess} is wrong answer`);
    } else
    console.log(arr[0])
};

function renderAnswer() {
    console.log("correctAnswer")
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

