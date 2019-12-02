function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    this.toString = function () {
        if (this.letter === " ") {
            this.guessed = true;
            return " ;"
        } else {
            if(this.guessed === false){
                return "_"
            }else   {
                return this.letter;
            }
            
        }
    }
    this.letterCheck = function (userChoice) {
        if (userChoice.toLowercase() === this.letter.toLowercase()) {
            guessed = true;
        } else {
            return false;
        }
    }
};
module.exports = Letter;