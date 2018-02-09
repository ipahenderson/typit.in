const assert = require('assert');
const Words = require('../words.js');

describe('Words', function () {
  let words;
})
beforeEach(function(){
  words = new Words();
});

it('should start with an empty word', function(){
  assert.strictEqual(words.word, "");
});

it('should start with an empty answer', function(){
  assert.strictEqual(words.answer, "");
});

it('should be able to set a word', function(){
  words.word = "apple"
  assert.strictEqual(words.word, "apple");
});
