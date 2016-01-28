var mongoose = require('mongoose')
	, http = require('http')
	, fs = require('fs')
  , _ = require('underscore')
  , request = require('request')
  , cheerio = require('cheerio')

	, dataModel = mongoose.model('dataModel');

exports.getallscrapingdata = function(req, res){

  request('https://www.data.gov/', function(err, response, body){
    var topics = [];
    var header = {};
    var paragraph = {};
    
    if(!err){

    var $ = cheerio.load(body);

    $("div.jumbotron").each(function(){
      header = $("h1",this).text();
      paragraph = $("p", this).text();

    });
    
    
    //Count BROWSE TOPICS
    var count = $("ul.topics").children().children().length;

    //get BROWSE TOPICS name
      for(i=0; i < count; i++){
        topics.push($("ul.topics").children().children().eq(i).text());
      }

      var browseTopic = _.uniq(topics);
      //send data on client side
      res.send({"browseTopic": browseTopic ,"header": header, "paragraph": paragraph})
    }
  })
        
}