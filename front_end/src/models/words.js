const Words = function(keyboard, gamedata, gameview){
  this.word = "";
  this.answer = "";
  this.nextletter = "";
  this.keyboard = keyboard;
  this.gamedata = gamedata;
  this.gameview = gameview;
  this.wordsToPlay = [];
}

Words.prototype.setAnswerLength = function () {
  var newAnswer = "";
  for (var i = 0 ; i < this.word.length ; i++) {
    newAnswer += "_";
  }
  this.answer = newAnswer;
};

Words.prototype.setWord = function(wordIn){
  this.word = wordIn;
  this.nextletter = this.word.charAt(0);
}
Words.prototype.shuffle = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

Words.prototype.getWordsToPlay = function(category){
  var playArray = [];
  if (category){
    for (word of this.gamedata){
      if (category == word.category){
        playArray.push(word)
      }
    }
    this.wordsToPlay = this.shuffle(playArray);
  }
  else{
    this.wordsToPlay = this.gamedata;
  }
};

Words.prototype.fillAnswer = function (letter) {
  var newAnswerArray = [];
  for (var i = 0; i < this.answer.length; i++) {
    if (this.answer.charAt(i) !== '_'){
      newAnswerArray.push(this.answer.charAt(i));
    }
  }
  newAnswerArray.push(letter);
  var letterCount = newAnswerArray.length;
  this.nextletter = this.word.charAt(letterCount);
  for (var i = 0; i < (this.word.length - (letterCount)); i++) {
    newAnswerArray.push('_');
  }
  this.answer = newAnswerArray.join("");
};

Words.prototype.checkLetter = function(letterIn){
  if (letterIn === this.nextletter){
    this.fillAnswer(letterIn);
  }
}

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


Words.prototype.winCheck = function () {
  var roundCount = 0;
  for (var i = 0; i < this.wordsToPlay.length; i++) {
    if(this.word === this.answer){
      roundCount ++;
      this.gameview.clearRound();
      this.prepareRound(roundCount);
    }
  }
};

Words.prototype.run = function(letter){
  this.checkLetter(letter);
  this.gameview.updateAnswer(this.answer);
  this.winCheck();
};





module.exports = Words;
