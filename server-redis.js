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
    console.log('Server Started. Listening on *:' + port);
});
// Store people in chatroom
var chatters = [];
// Store messages in chatroom
var chat_messages = [];

var options = [];
 // Redis Client Ready
 client.once('ready', function() {
    // Flush Redis DB
    // client.flushdb();
    // Initialize Chatters
    var op = '{"options":[{"id":"id","stockName":"AAPL","optionName":"AAPL-option1","strike":"AAPL-strike","volatility":"0","expiryDate":"2019-05-12","stockPrice":"500", "optionPrice":"10","lastUpdatedTime":"2019-5-13 11:00:01"},{"id":"id","stockName":"AAPL","optionName":"AAPL-option2","strike":"AAPL-strike","volatility":"0","expiryDate":"2019-05-12","stockPrice":"500","optionPrice":"10","lastUpdatedTime":"2019-5-13 11:00:02"}]}';
    //client.set('options',op);
    console.log ("Redis client connected");
    client.get('options', function(err, reply) {
        if (reply) {
            //options = JSON.parse(reply);
            console.log("Data of options:" + JSON.parse(reply))
        }
    });
});

app.use(express.static(path.join(__dirname,'dist/crudtest/')));

// API - Get Messages
app.get('/options', function(req, res) {
    client.get('options', function(err, reply) {
        if (reply) {
            //options = JSON.parse(reply);
            res.send(JSON.parse(reply));
        }
        
        else
        {
            console.log("Redis is not respondng");
        }
    });
   
    //res.send(option);
  });
  
  app.get('/',function(req, res){//get,put,post,delete   
    res.sendFile(__dirname + '/dist/crudtest/index.html');
    //console.log
  });
