const KeyBoard = require('./keyboard.js');


const startKeyListener = function(){

document.addEventListener('keydown', function(){


  function keyPress(e){
    // keyBoard.addKey(e.key);
    if(e.keyCode == 48){
      keyBoard.addKey(e.key);
      console.log(keyBoard.pressedKeys);
      // ('#key_0').css("background", "red")
    }
    if(e.keyCode == 49){ // 1
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 50){ // 2
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 51){ // 3
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 52){ // 4
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 53){ // 5
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 54){ // 6
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 55){ // 7
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 56){ // 8
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 57){ // 9
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 65){ // a
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 66){ // b
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 67){ // c
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 68){ // d
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 69){ // e
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 70){ // f
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 71){ // g
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 72){ // h
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 73){ // i
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 74){ // j
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 75){ // k
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 76){ // l
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 77){ // m
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 78){ // n
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 79){ // o
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 80){ // p
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 81){ // q
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 82){ // r
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 83){ // s
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 84){ // t
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 85){ // u
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 86){ // v
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 87){ // w
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 88){ // x
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 89){ // y
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 90){ // z
      keyBoard.addKey(e.key);
    }

  };
  document.onkeydown = keyPress;
})
};
module.exports = startKeyListener;
