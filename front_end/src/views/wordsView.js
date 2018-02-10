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

WordsView.prototype.render = function(data, answerIn){
  var word = document.createElement('p');
  word.id = "display-word";

  var answer = document.createElement('p');
  answer.id = "answer-display";

  var image = this.createImage (data);
  image.style.cssText = "width: 120px;height: 120px;"
  word.innerText = data.word;
  answer.innerText = answerIn;

  this.container.appendChild(word);
  this.container.appendChild(image);
  this.container.appendChild(answer);
}

module.exports = WordsView;
