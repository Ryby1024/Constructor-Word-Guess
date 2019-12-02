const Word = require("./word.js");
const inquirer = require("inquirer");

let wordArray = ["detroit", "atlanta", "orlando", "miami", "seattle", "dallas"];

let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

let guessesLeft = 10;
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

console.log(randomWord);

let newWord = new Word(randomWord);

let incorrectLetters = [];
let correctLetters = [];


function askUser(){
if(guessesLeft > 0){
inquirer.prompt([
    {
        type: "input",
        name: "letter",
        message: "Guess a letter that is in the random word."
    }
]).then(function(user){
    if(!letters.includes(user.letter) || user.letter > 1){
        console.log("\n Please try againg! \n");
        askUser();
    }else{
        if(incorrectLetters.includes(user.letter) || correctLetters.includes(user.letter) || user.letter === ""){
            console.log("\n Already guessed the letter \n");
            askUser();

        }else{
    }
    if(randomWord.includes(user.letter)){
        console.log(user.letter);
        guessesLeft--;
        console.log(guessesLeft);
        askUser()
    }   else{
        console.log("Sorry, that letter is not in the secret word!")
        guessesLeft--
        console.log(guessesLeft);
        askUser()
    }
    newWord.answerLog();
}
})
}else{
    console.log("Sorry, you lose!")
}
}
askUser();

function createWord(){

}
