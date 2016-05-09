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
exports.getDataForInterview = function(req, res){
  request('https://hasin.me/', function(err, response,body){
    var time = [];
    
    if(!err){
      var $ = cheerio.load(body);

      $("div.entry-date").each(function(){
         time.push($("time.published",this).text());

      });
      // console.log(time);
      var newvalue =0;
      var diffDays =0;
      var day = 0;
      for(i=0; i<time.length; i++){
        
        var olddate = time[i];
        var newdate = time[i+1];
        
        var date1 = Date.parse(olddate);
        var date2 = Date.parse(newdate)

        var date3 = new Date(date1);
        var date4 = new Date(date2);
        var timeDiff = Math.abs(date4.getTime() - date3.getTime());
        diffDays += Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        console.log(diffDays / time.length);
        
        
      }

    }

  })
}

exports.stackoverflow = function(){
  request('https://stackoverflow.com/jobs', function(err, res, body){
    if(!err){
      var designation;
      var tag;
      var $ = cheerio.load(body);

      $("div.listResults").each(function(){
        designation = ($('div.-title', this).text());
        

      });
      console.log(designation)
      console.log(tag)
    
    //Count BROWSE TOPICS
    //var count = $("ul.topics").children().children().length;

    //get BROWSE TOPICS name
      // for(i=0; i < count; i++){
      //   topics.push($("ul.topics").children().children().eq(i).text());
      // }

      // var browseTopic = _.uniq(topics);
      // //send data on client side
      // res.send({"browseTopic": browseTopic ,"header": header, "paragraph": paragraph})
    }
  })
}