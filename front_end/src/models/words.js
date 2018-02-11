const Words = function(keyboard, gamedata, gameview){
  this.word = "";
  this.answer = "";
  this.keyboard = keyboard;
  this.gamedata = gamedata;
  this.gameview = gameview;
  this.wordsToPlay = [];
}

Words.prototype.setAnswerLength = function () {
  var newAnswer = "";
  for (var i = 0 ; i < this.word.length ; i++) {
    newAnswer += "_"
  }
  this.answer = newAnswer;
};

Words.prototype.setWord = function(wordIn){
  this.word = wordIn;
}

Words.prototype.getWordsToPlay = function(category){
  var playArray = [];
  if (category){
    for (word of this.gamedata){
      if (category == word.category){
        playArray.push(word)
      }
    }
    this.wordsToPlay = playArray;
  }
  else{
    this.wordsToPlay = this.gamedata;
  }
};

Words.prototype.fillAnswer = function (letter) {
  var newAnswerArray = [];
  for (var i = 0; i < this.answer.length; i++) {
    if (this.answer.charAt(i) !== '_'){
      newAnswerArray.push(this.answer.charAt(i))
    }
  }
  newAnswerArray.push(letter);
  var letterCount = newAnswerArray.length
  for (var i = 0; i < (this.answer.length - letterCount); i++) {
    newAnswerArray.push('_')
  }
  this.answer = newAnswerArray.join("");
};


Words.prototype.prepareRound = function(index){
  console.log(this.wordsToPlay);
  for (var i = 0; i < this.wordsToPlay.length; i++) {
    if (index === i){
      this.setWord(this.wordsToPlay[i].word);
      this.setAnswerLength();
      this.gameview.render(this.wordsToPlay[i], this.answer)
    }
  }
}



module.exports = Words;
