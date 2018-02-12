const Maths = function(gamedata, gameview){
  this.solution = "";
  this.answer = "";
  this.nextletter = "";
  this.gamedata = gamedata;
  this.gameview = gameview;
  this.problemsToPlay = [];
  this.roundCount = 0;
}

Maths.prototype.setProblem = function(problemIn){
  this.problem = problemIn;
  this.nextletter = this.problem.charAt(0);
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
  console.log(this.problemsToPlay);
  for (var i = 0; i < this.problemsToPlay.length; i++) {
    if (index === i){
      this.setproblem(this.problemsToPlay[i].problem);
      this.setAnswerLength();
      this.gameview.render(this.problemsToPlay[i], this.answer)
    }
    if (index >= this.problemsToPlay.length){
      this.gameview.clearRound();
      this.gameview.winScreen();
    }
  }
};


Maths.prototype.winCheck = function () {
  if(this.problem === this.answer){
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

Maths.prototype.run = function(letter){
  this.checkLetter(letter);
  this.gameview.updateAnswer(this.answer);
  return(this.winCheck());
};
