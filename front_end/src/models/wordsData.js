const Request = require('../services/request.js');

const WordsData = function(url){
  this.url = url;
  this.data = [];
}

WordsData.prototype.getData = function(){
  const request = new Request(this.url);
  const successGet = function(dataIn){
    this.data = dataIn;
    this.giveData();
  }.bind(this);
  request.get(successGet);
}

WordsData.prototype.giveData = function () {
  return this.data;
};

module.exports = WordsData;
