const Request = require('../services/request.js');

const WordsData = function(url){
  this.url = url;
  this.data = null;
}

WordsData.prototype.getData = function(){
  const request = new Request(this.url);
  const successGet = function(dataIn){
    this.data = dataIn;
    console.log(this.data);
    console.log("got data");
  }
  request.get(successGet);
}

module.exports = WordsData;
