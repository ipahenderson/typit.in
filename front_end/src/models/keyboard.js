const KeyBoard = function(){
  this.pressedKeys = [];
};

KeyBoard.prototype.addKey = function(key){
  this.pressedKeys.push(key);
}

module.exports = KeyBoard;
