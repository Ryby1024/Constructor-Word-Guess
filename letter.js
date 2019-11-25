function Letter(letter, guessed) {
    this.letter = letter;
    this.guessed = false;

    this.letterReturn = function () {
        if (this.guessed === true) {
            return this.letter.toLowercase();
        } else {
            console.log("_");
        }
    }
    this.letterCheck = function (userChoice) {
        if (userChoice.toLowercase() === letter.toLowercase()) {
            guessed = true;
        } else {
            return false;
        }
    }
};
module.exports = Letter;