const MathsView = function(container){
  this.container = container;
}

WordsView.prototype.createImage = function (data) {
var image = document.createElement('img');
image.id = "game-image";
image.src = data.image;
image.alt = data.name;
return image;
};

WordsView.prototype.clearRound = function(){
  this.container.innerHTML = "";
}

WordsView.prototype.winScreen = function (){
  var welltext = document.createElement('p');
  welltext.id = "win-text";
  welltext.innerText = "w e l l "
  var donetext = document.createElement('p');
  donetext.id = "win-text";
  donetext.innerText = " d o n e !"
  var image = document.createElement('img');
  image.id = 'win-image';
  image.src = '/images/trophy.svg'
  image.alt = 'trophy'
  image.style.cssText = "width: 120px;height: 120px;"
  this.container.appendChild(welltext);
  this.container.appendChild(image);
  this.container.appendChild(donetext);
}


WordsView.prototype.render = function(data, roundCount, totalRound){
  var image1 = this.createImage('img')

  var image = this.createImage (data);
  image.style.cssText = "width: 120px;height: 120px;"


  this.container.appendChild(image);
  this.container.appendChild(answer);
}

module.exports = MathsView;
