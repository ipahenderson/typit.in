const Maths = function(gamedata, gameview){
  this.answer = "";
  this.nextletter = "";
  this.gamedata = gamedata;
  this.gameview = gameview;
  this.problemsToPlay = [];
  this.roundCount = 0;
}

Maths.prototype.setProblem = function(problemIn){
  this.nextletter = problemIn.solution;
  this.solutionImage = problemIn.image4;
}
Maths.prototype.shuffle = function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

Maths.prototype.getMathsToPlay = function(category){
  this.roundCount = 0;
  var playArray = [];
  if (category){
    for (problem of this.gamedata){
      if (category == problem.category){
        playArray.push(problem)
      }
    }
    this.problemsToPlay = this.shuffle(playArray);
  }
  else{
    this.problemsToPlay = this.gamedata;
  }
};

Maths.prototype.prepareRound = function(index){
  var totalRound = this.problemsToPlay.length;
  for (var i = 0; i < totalRound; i++) {
    if (index === i){
      this.setProblem(this.problemsToPlay[i].solution);
      this.gameview.render(this.problemsToPlay[i], this.roundCount, totalRound);
    }
    if (index >= this.problemsToPlay.length){
      this.gameview.clearRound();
      this.gameview.winScreen();
    }
  }
};

Maths.prototype.setAnswer = function(key){
  if(key == this.solution){
    this.answer = key;
  }

}


Maths.prototype.winCheck = function () {
  if(this.solution === this.answer){
    this.roundCount += 1;
    var timethis = this;
    setTimeout(function () {
      timethis.gameview.clearRound();
    }, 600);
    setTimeout(function () {
      timethis.prepareRound(timethis.roundCount);
    }, 660);
  }
};

Maths.prototype.run = function(key){
  this.setAnswer(key);
  this.gameview.updateAnswer();
  return(this.winCheck());
};

module.exports = Maths;
