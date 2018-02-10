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
    newAnswer += "_ "
  }
  this.answer = newAnswer;
};

Words.prototype.setWord = function(wordIn){
  this.word = wordIn;
}

Words.prototype.prepareRound = function(index){
  console.log(this.gamedata);
  for (var i = 0; i < this.gamedata.length; i++) {
    if (index === i){
      this.setWord(this.gamedata[i].word);
      this.setAnswerLength();
      this.gameview.render(this.gamedata[i], this.answer)
    }
  }
}


module.exports = Words;
