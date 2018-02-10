const keyPress = require ('./models/keyPress');
const keyRelease = require ('./models/keyRelease');
const KeyBoard = require ('./models/keyboard');
const WordsData = require('./models/wordsData.js');
const WordsView = require('./views/wordsView.js');
const Words = require('./models/words.js');



const app = function(){
  const keyBoard = new KeyBoard();
  const wordsData = new WordsData('http://localhost:5000/api/words');
  const wordsView = new WordsView(document.querySelector('.game-window'));
  const startButton = document.querySelector('#start-button');
  startButton.addEventListener('click', function(){

  })
  keyPress(keyBoard);
  keyRelease();
  wordsData.getData();


  startButton.addEventListener('click', function(){
    startButton.style.cssText = "visibility:hidden;height:0px"
    var gameData = wordsData.giveData();
    const words = new Words(keyBoard, gameData, wordsView);
    console.log(keyBoard);
    words.prepareRound(1);
  })
};

window.addEventListener('load', app);
