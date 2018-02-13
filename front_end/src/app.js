const keyPress = require ('./models/keyPress');
const keyRelease = require ('./models/keyRelease');
const KeyBoard = require ('./models/keyboard.js');
const WordsData = require('./models/wordsData.js');
const MathsData = require('./models/mathsData.js');
const WordsView = require('./views/wordsView.js');
const MathsView = require('./views/mathsView.js');
const Words = require('./models/words.js');
const Maths = require('./models/maths.js');



const app = function(){
  const wordsData = new WordsData('http://localhost:5000/api/words');
  const mathsData = new MathsData('http://localhost:5000/api/maths');
  const wordsView = new WordsView(document.querySelector('.game-window'));
  const mathsView = new MathsView(document.querySelector('.game-window'));

  const startButton = document.querySelector('#start-button');

  const animalButton = document.querySelector('#animal-game-button');
  const colourButton = document.querySelector('#colour-game-button');
  const clothingButton = document.querySelector('#clothing-game-button');
  const foodButton = document.querySelector('#food-game-button');

  const addButton = document.querySelector('#add-game-button');
  const minusButton = document.querySelector('#minus-game-button');
  const multiplyButton = document.querySelector('#multiply-game-button');
  const divideButton = document.querySelector('#divide-game-button');

  const testButton = document.querySelector('#test-game-button');

  wordsData.getData();
  mathsData.getData();

  var deleteButtons = function(){
    animalButton.parentNode.removeChild(animalButton);
    clothingButton.parentNode.removeChild(clothingButton);
    foodButton.parentNode.removeChild(foodButton);
    colourButton.parentNode.removeChild(colourButton);
    testButton.parentNode.removeChild(testButton);
    addButton.parentNode.removeChild(addButton);
    minusButton.parentNode.removeChild(minusButton);
    divideButton.parentNode.removeChild(divideButton);
    multiplyButton.parentNode.removeChild(multiplyButton);
  }


  addButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('add');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem);
    });

  });

  minusButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('minus');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem)
    });

  });

  divideButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('divide');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem)
    });

  });

  multiplyButton.addEventListener('click', function(){
    deleteButtons();

    var gameData = mathsData.giveData();
    const maths = new Maths(gameData, mathsView);
    maths.getMathsToPlay('times');
    maths.prepareRound(0);
    keyPress(maths);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(maths.problemsToPlay[maths.roundCount].problem)
    });

  });


  animalButton.addEventListener('click', function(){
    deleteButtons();

    const keyBoard = new KeyBoard();
    var gameData = wordsData.giveData();
    const words = new Words(keyBoard, gameData, wordsView);
    words.getWordsToPlay('animal');
    console.log(words.keyboard);
    words.prepareRound(0);
    keyPress(words);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Russian Female")
    });

  });

  foodButton.addEventListener('click', function(){
    deleteButtons();

    const keyBoard = new KeyBoard();
    var gameData = wordsData.giveData();
    const words = new Words(keyBoard, gameData, wordsView);
    words.getWordsToPlay('food');
    console.log(words.keyboard);
    words.prepareRound(0);
    keyPress(words);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Polish Female")
    });

  });

  colourButton.addEventListener('click', function(){
    deleteButtons();

    const keyBoard = new KeyBoard();
    var gameData = wordsData.giveData();
    const words = new Words(keyBoard, gameData, wordsView);
    words.getWordsToPlay('colour');
    console.log(words.keyboard);
    words.prepareRound(0);
    keyPress(words);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Italian Female")
    });

  });

  clothingButton.addEventListener('click', function(){
    deleteButtons();

    const keyBoard = new KeyBoard();
    var gameData = wordsData.giveData();
    const words = new Words(keyBoard, gameData, wordsView);
    words.getWordsToPlay('clothing');
    console.log(words.keyboard);
    words.prepareRound(0);
    keyPress(words);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word, "Afrikaans Male")
    });

  });

  testButton.addEventListener('click', function(){
    deleteButtons();

    const keyBoard = new KeyBoard();
    var gameData = wordsData.giveData();
    const words = new Words(keyBoard, gameData, wordsView);
    words.getWordsToPlay('test');
    console.log(words.keyboard);
    words.prepareRound(0);
    keyPress(words);
    keyRelease();

    var speakButton = document.querySelector('#speaker');
    speakButton.addEventListener('click', function(){
      responsiveVoice.speak(words.word)
    });






  });



};
window.addEventListener('load', app);
