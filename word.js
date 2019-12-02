const Letter = require("./letter.js");


function Word(answer) {
    this.word = [];
    for (let i = 0; i < answer.length; i++) {
        let letterObject = new Letter(answer[i]);
        this.word.push(letterObject);

    }
    this.answerLog = function() {
        answerArr = "";
        for(let j = 0; j < this.word.length; j++){
            answer += this.word[j] + " ";
        }
        console.log(answerArr + "\n");
    }
    this.userInput = function(input) {
        for(let k = 0; k < this.word.length; k++){
            this.word[i].letterCheck(input)
        }
    }
        
    
}
module.exports = Word;
