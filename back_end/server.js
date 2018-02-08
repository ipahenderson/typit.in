
var express = require("express");
var server = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const objectID = require('mongodb').ObjectID;
server.use(cors());
server.use(express.static('front_end/build'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));


MongoClient.connect("mongoldb://localhost:27017", function(err, result){
  if(err){
    console.log(err)
    return;
  }
})

server.get("api/words", function(req, res){
  d.collection("typit_words").find().toArray(function(err, result){
    res.status(200);
    res.json(result);
  });
})

server.use(express.static("build"));

server.listen(5000, function(){
  console.log("Typit Backend running on port: " + this.address().port);
});
