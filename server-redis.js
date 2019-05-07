// var redis = require("redis"),
//     client = redis.createClient();

// // if you'd like to select database 3, instead of 0 (default), call
// // client.select(3, function() { /* ... */ });

// client.on("error", function (err) {
//     console.log("Error " + err);
// });


// client.set("string key", "string val", redis.print);
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// client.hkeys("hash key", function (err, replies) {
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.quit();
// });

var creds={
    "user": "",
    "password": "",
    "host": "localhost",
    "port": 6379
};

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var async = require('async');
const path = require('path');

var options;
var redis = require('redis');
//var client= redis.createClient();
// in case of credential we need to use this line;
var  client = redis.createClient('redis://' + creds.user + ':' + creds.password + '@' + creds.host + ':' + creds.port);

// Express Middleware for serving static
// files and parsing the request body
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// Start the Server
http.listen(port, function() {
    console.log('Node Server Started. Listening on *:' + port);
});
// Store people in chatroom
var chatters = [];
// Store messages in chatroom
var chat_messages = [];

var option = {
    
  id :'',
  stockName:'',
  optionName:'',
  strike:0,
  volatility:0,
  expiryDate: '',
  stockPrice:0,
  optionPrice:0,
  lastUpdatedTime:'',
  format:0,
  formatColor:''
  };

var options = [];
 // Redis Client Ready
 client.once('ready', function() {
    // Flush Redis DB
    // client.flushdb();
    // Initialize Chatters
    //var op = '{"options":[{"id":"id","stockName":"AAPL","optionName":"AAPL-option1","strike":"AAPL-strike","volatility":"0","expiryDate":"2019-05-12","stockPrice":"500", "optionPrice":"10","lastUpdatedTime":"2019-5-13 11:00:01"},{"id":"id","stockName":"AAPL","optionName":"AAPL-option2","strike":"AAPL-strike","volatility":"0","expiryDate":"2019-05-12","stockPrice":"500","optionPrice":"10","lastUpdatedTime":"2019-5-13 11:00:02"}]}';
    var op ='{\"stockName\":\"AAPL\",\"optionName\":\"AAPL191018C00140000-1\",\"strike\":140.0,\"volatility\":0.004691215,\"expiryDate\":\"2019-10-18\",\"stockPrice\":200.37,\"optionPrice\":61.98082568324042,\"lastUpdatedTime\":{\"date\":\"2019-05-06\",\"time\":{\"hour\":18,\"minute\":36,\"second\":48,\"nano\":754000000}},\"batchId\":\"BATCH_ID_8\"}';
    client.set('AAPL191018C00140000-1',op);
    console.log ("Redis client connected with config : " + 'redis://' + creds.user + ':' + creds.password + '@' + creds.host + ':' + creds.port);
    // client.get('options', function(err, reply) {
    //     if (reply) {
    //         //options = JSON.parse(reply);
    //         console.log("Data of options:" + JSON.parse(reply))
    //     }
    // });

      
});

app.use(express.static(path.join(__dirname,'dist/CrudTest/')));

// API - Get Messages
app.get('/options', function(req, res) {
    
  client.keys('*', function (err, keys) {
    if (err) return console.log(err);
  
    for(var i = 0, len = keys.length; i < len; i++) {
      //console.log(keys[i]);
      client.get(keys[i], function(err, reply) {
        if (reply) 
        {
          console.log(reply);
             data = JSON.parse(reply);
             console.log(data);
            //var op = new option { a=0,b=0};
             option.id = "id";
            
             option.stockName= data.stockName;
             option.optionName = data.optionName;
             option.strike = data.strike;
             option.volatility = data.volatility;
             option.expiryDate = data.expiryDate;
             option.stockPrice= data.stockPrice;
             option.optionPrice = data.optionPrice;
             option.lastUpdatedTime = data.lastUpdatedTime.date + " " + data.lastUpdatedTime.time.hour + ":" + data.lastUpdatedTime.time.minute + ":" + data.lastUpdatedTime.time.second;
            // op.format = 0;
            // op.formatColor = "White";
            // console.log(reply);
            options.push(data);
            //console.log("op lenght" + options.length);
        }
        
        else
        {
            console.log("Redis is not respondng");
        }
    });

    }
  }); 

  console.log("op lenght" + options.length);

    res.send(options);
  });
  
  app.get('/',function(req, res){//get,put,post,delete   
    res.sendFile(__dirname + '/dist/CrudTest/index.html');
    //console.log
  });
