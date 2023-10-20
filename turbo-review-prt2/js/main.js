// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
function makeASentence(str){
    const str = 'Is this the best week ever?'
    alert( str.endWith('?'))
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let variable = 'I am looking for jr. dev positions'
    console.log( str.replaceAll('jr dev', 'software engineer') )

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    hand = math.random();
    if (hand > 0.33){
        return rock;
    }else if(hand > 0.66){
        return scissors;
    }else{
        return paper; 
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function botRockPaperScissors(playerChoice){

    let bot = rockPaperScissors();

    if ( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissor' && botChoice === 'paper') ){
        return 'You Win!'
    }else if (playerChoice === botChoice){
        return 'You tie!'
    }else{
        return 'You lose!'
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playXTimes(arr){
    arr.forEach( choice => checkWin(choice))
}

playXTimes(['rock', 'paper', 'scissors'])