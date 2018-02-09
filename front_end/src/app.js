const keyPress = require ('./models/keyPress');
const KeyBoard = require ('./models/keyboard');
// const KeyBoard = require ('./models/keyboard');

window.addEventListener('load', function(){
  keyBoard = new KeyBoard();
  keyPress(keyBoard);

})
