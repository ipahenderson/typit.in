const keyPress = require ('./models/keyPress');
const keyRelease = require ('./models/keyRelease');
const KeyBoard = require ('./models/keyboard');
const WordsData = require('./models/wordsData.js');
// const KeyBoard = require ('./models/keyboard');



const app = function(){
  keyBoard = new KeyBoard();
  wordsData = new WordsData('http://localhost:5000/api/words');
  keyPress(keyBoard);
  keyRelease();
  wordsData.getData();


};

window.addEventListener('load', app);
