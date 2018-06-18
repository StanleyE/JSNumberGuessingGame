//Guessing Game!
//******* Functions for game ********/
const readlineSync = require('readline-sync');

 // number question attempt
    // let number = readlineSync.questionInt('Give me a number please:');
    // console.log('Your picked number was ' + number);
    // let sum  = (number + 5);
    // console.log(number + ' plus ' + 5 + ' is ' + sum);
    //keep code!!!

let max;
// Asks for a cap number
let getMaxFromUser = () => {
    // gets the maximum number for the game from the user and returns it as a Number
    getMaxFromUser = readlineSync.questionInt('Give us a number to Cap the game off at: ');
    max = getMaxFromUser;
        if ( max === 300){
            console.log('THIS IS SPARTA!!!!!!!!!!!')
        } else if (max === 0){
            console.log ('Zero inputed');
        } 
        else {
            console.log('Awesome, Get ready to Guess the correct number between 0 - ' + max);
        };
};

let goal;
// randomly generates number from parameters set above
let generateRandomNumber = (inputMax) => {
    // generate a random integer between 0 and max
    inputMax = max;
    goal = Math.floor(Math.random()*max);
//   for testing purpose only! console.log('Number generated was ' + goal);
};

let guess;
// ask person to guess number
let getGuessFromUser = (inputNumMax) => {
    // takes care of prompting the user for a guess and converting it to a number
    inputNumMax = max;
    guess = readlineSync.questionInt('Please Guess A Number Between 0 - ' + inputNumMax + ': ');
    // console.log('You guessed: ' + guess);
    };

 // check if a guess is correct and return a boolean
 let isGuessCorrect = (inputGoal, inputGuess) => {
     inputGoal = goal;
     inputGuess = guess;
        if (inputGuess === inputGoal){  // if ==== true they win game over
                console.log('*!!* That\'s Correct! Great Job! *!!*');
                endGame();
            } else if (inputGuess < inputGoal){ // if too low tell person such and guess again
                console.log('~ ~ ~ Too Low! Try Again! ~ ~ ~');
            } else if (inputGuess > inputGoal) { //  if too high tell person and guess again
                console.log('~ ~ ~ Too High! Try Again! ~ ~ ~');
            } else {
                console.log('Please guess a numer');
            };
};


let gameOver = false;    
let endGame = () => {
    // let quit = readlineSync.keyInYN('Did you want to play again?');
    // if ( quit === false){
        console.log('Thanks for Playing');
        gameOver = true;
    // }
    // else {
        //getMaxFromUser(); despite best effort could not get this function to call again to allow for replay
        //it kept jumping to the module.js page and highlighting line 516 in tryModuleLoad
};

//**************** GAME START *******************/
let startGame = () => {
    //  ask for name and implement
    const gamerName = readlineSync.question('Hey, What\'s Your name? ');
    console.log('Hi ' +gamerName + '! Let\'s play a Guessing Game!');
    // code that houses the while loop for our game. call this function once to begin
    gameOver = false;
    let gameSet = false;
    while ( gameSet === false && gameOver === false){
        getMaxFromUser();
            if (max === 0) {
                console.log('Zero is not an acceptable value.');
                endGame();
            } else {
            gameSet = true;
            }
        generateRandomNumber();
        }; //end of first while loop
                for (var i = 0; i < 300; i++) {
                    let attemptCount = 0;
                        while (gameOver === false) {
                            attemptCount++;
                            console.log ('***** Player: ' + gamerName + '; Round # ' + attemptCount + ' *****');
                            getGuessFromUser();
                            isGuessCorrect();
                };//end of second while loop
                break;
            };//end of for loop
}; //ends startGame

startGame();