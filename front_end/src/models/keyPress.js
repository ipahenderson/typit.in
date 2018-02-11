const KeyBoard = require('./keyboard.js');


const startKeyListener = function(game){

document.addEventListener('keydown', function(){

  function changeCSS(keyID){
    document.querySelector(keyID).classList.add('pressed');


  }

  function keyPress(e){
    // game.keyboard.addKey(e.key);
    if(e.keyCode == 48){
      changeCSS('#key_0');
      game.keyboard.addKey(e.key);
      console.log(game.keyboard.pressedKeys);
    }
    if(e.keyCode == 49){ // 1
      changeCSS('#key_1');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 50){ // 2
      changeCSS('#key_2');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 51){ // 3
      changeCSS('#key_3');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 52){ // 4
      changeCSS('#key_4');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 53){ // 5
      changeCSS('#key_5');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 54){ // 6
      changeCSS('#key_6');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 55){ // 7
      changeCSS('#key_7');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 56){ // 8
      changeCSS('#key_8');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 57){ // 9
      changeCSS('#key_9');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 65){ // a
      changeCSS('#key_A');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 66){ // b
      changeCSS('#key_B');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 67){ // c
      changeCSS('#key_C');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 68){ // d
      changeCSS('#key_D');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 69){ // e
      changeCSS('#key_E');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 70){ // f
      changeCSS('#key_F');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 71){ // g
      changeCSS('#key_G');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 72){ // h
      changeCSS('#key_H');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 73){ // i
      changeCSS('#key_I');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 74){ // j
      changeCSS('#key_J');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 75){ // k
      changeCSS('#key_K');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 76){ // l
      changeCSS('#key_L');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 77){ // m
      changeCSS('#key_M');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 78){ // n
      changeCSS('#key_N');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 79){ // o
      changeCSS('#key_O');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 80){ // p
      changeCSS('#key_P');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 81){ // q
      changeCSS('#key_Q');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 82){ // r
      changeCSS('#key_R');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 83){ // s
      changeCSS('#key_S');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 84){ // t
      changeCSS('#key_T');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 85){ // u
      changeCSS('#key_U');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 86){ // v
      changeCSS('#key_V');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 87){ // w
      changeCSS('#key_W');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 88){ // x
      changeCSS('#key_X');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 89){ // y
      changeCSS('#key_Y');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 90){ // z
      changeCSS('#key_Z');
      game.keyboard.addKey(e.key);
    }
    if(e.keyCode == 32){ // z
      changeCSS('#space');
    }
    if(e.keyCode == 13){ // z
      changeCSS('#enter');
    }
    if(e.keyCode == 37){ // z
      changeCSS('#key_left');
    }
    if(e.keyCode == 38){ // z
      changeCSS('#key_up');
    }
    if(e.keyCode == 39){ // z
      changeCSS('#key_right');
    }
    if(e.keyCode == 40){ // z
      changeCSS('#key_down');
    }

  };
  document.onkeydown = keyPress;
})
};
module.exports = startKeyListener;
