const Request = require('../services/request.js');

const MathsData = function(url){
  this.url = url;
  this.data = [];
}

MathsData.prototype.getData = function(){
  const request = new Request(this.url);
  const successGet = function(dataIn){
    this.data = dataIn;
    this.giveData();
  }.bind(this);
  request.get(successGet);
}

MathsData.prototype.giveData = function () {
  return this.data;
};

module.exports = MathsData;
