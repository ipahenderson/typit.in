const Request = require('../services/request.js');

const FlagsData = function(url){
  this.url = url;
  this.data = [];
}

FlagsData.prototype.getData = function(){
  const request = new Request(this.url);
  const successGet = function(dataIn){
    this.data = dataIn;
    this.giveData();
  }.bind(this);
  request.get(successGet);
}

FlagsData.prototype.giveData = function () {
  return this.data;
};

module.exports = FlagsData;
