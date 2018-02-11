const WordsView = function(container){
  this.container = container;
}

WordsView.prototype.createImage = function (data) {
var image = document.createElement('img');
image.id = "game-image";
image.src = data.image;
image.alt = data.name;
return image;
};

WordsView.prototype.prepareWord = function(word){
  var wordIn = word;
  var newWord = '';
  var wordSplit = [];
  for (var i = 0; i < wordIn.length; i++) {
    wordSplit.push(wordIn.charAt(i))
    newWord += (wordSplit[i] + ' ');
  }
  return newWord;
}

WordsView.prototype.updateAnswer = function (newAnswer) {
  answerView = document.querySelector('#answer-display');
  answerView.innerText = this.prepareWord(newAnswer);
};

WordsView.prototype.clearRound = function(){
  this.container.innerHTML = "";
}

WordsView.prototype.render = function(data, answerIn){
  var word = document.createElement('p');
  word.id = "display-word";

  var answer = document.createElement('p');
  answer.id = "answer-display";

  var image = this.createImage (data);
  image.style.cssText = "width: 120px;height: 120px;"
  word.innerText = this.prepareWord(data.word);
  answer.innerText = this.prepareWord(answerIn);

  this.container.appendChild(word);
  this.container.appendChild(image);
  this.container.appendChild(answer);
}

module.exports = WordsView;
