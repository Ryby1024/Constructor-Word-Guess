const Word = require("./word.js");
const inquirer = require("inquirer");

let wordArray = ["detroit", "atlanta", "orlando", "miami", "seattle", "dallas"];

let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

let guessesLeft = 10;
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

console.log(randomWord);

let newWord = new Word(randomWord);
console.log(newWord);

function askUser(){
if(guessesLeft > 0){
inquirer.prompt([
    {
        type: "input",
        name: "letter",
        message: "Guess a letter that is in the random word."
    }
]).then(function(user){
    
    if(randomWord.includes(user.letter)){
        console.log(user.letter);
        guessesLeft--;
        askUser()
    }   else{
        console.log("Sorry, that letter is not in the secret word!")
        guessesLeft--
        console.log(guessesLeft);
        askUser()
    }
    
})
}else{
    console.log("Sorry, you lose!")
}
}
askUser();
