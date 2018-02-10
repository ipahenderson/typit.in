const KeyBoard = require('./keyboard.js');


const startKeyListener = function(keyBoard){

document.addEventListener('keydown', function(){

  function changeCSS(keyID){
    document.querySelector(keyID).classList.add('pressed');


  }

  function keyPress(e){
    // keyBoard.addKey(e.key);
    if(e.keyCode == 48){
      changeCSS('#key_0');
      keyBoard.addKey(e.key);
      console.log(keyBoard.pressedKeys);
    }
    if(e.keyCode == 49){ // 1
      changeCSS('#key_1');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 50){ // 2
      changeCSS('#key_2');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 51){ // 3
      changeCSS('#key_3');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 52){ // 4
      changeCSS('#key_4');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 53){ // 5
      changeCSS('#key_5');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 54){ // 6
      changeCSS('#key_6');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 55){ // 7
      changeCSS('#key_7');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 56){ // 8
      changeCSS('#key_8');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 57){ // 9
      changeCSS('#key_9');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 65){ // a
      changeCSS('#key_A');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 66){ // b
      changeCSS('#key_B');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 67){ // c
      changeCSS('#key_C');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 68){ // d
      changeCSS('#key_D');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 69){ // e
      changeCSS('#key_E');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 70){ // f
      changeCSS('#key_F');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 71){ // g
      changeCSS('#key_G');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 72){ // h
      changeCSS('#key_H');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 73){ // i
      changeCSS('#key_I');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 74){ // j
      changeCSS('#key_J');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 75){ // k
      changeCSS('#key_K');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 76){ // l
      changeCSS('#key_L');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 77){ // m
      changeCSS('#key_M');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 78){ // n
      changeCSS('#key_N');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 79){ // o
      changeCSS('#key_O');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 80){ // p
      changeCSS('#key_P');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 81){ // q
      changeCSS('#key_Q');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 82){ // r
      changeCSS('#key_R');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 83){ // s
      changeCSS('#key_S');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 84){ // t
      changeCSS('#key_T');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 85){ // u
      changeCSS('#key_U');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 86){ // v
      changeCSS('#key_V');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 87){ // w
      changeCSS('#key_W');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 88){ // x
      changeCSS('#key_X');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 89){ // y
      changeCSS('#key_Y');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 90){ // z
      changeCSS('#key_Z');
      keyBoard.addKey(e.key);
    }
    if(e.keyCode == 32){ // z
      changeCSS('#space');
    }

  };
  document.onkeydown = keyPress;
})
};
module.exports = startKeyListener;
