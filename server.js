/// 3.17.59.95
//ssh -i atiraj_aws.pem ec2-user@3.17.59.95
//localhost : 8161 for ActiveMq

const express = require('express');
var Stomp = require('stomp-client');
const stompit = require('stompit');

const app = express();

const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const port =  5000;

// var MessageConsumer = function MessageConsumer(){};

// MessageConsumer.prototype.init = function init(){
//     var stompClient = new Stomp('locahhost',  '', '','');
//     stompClient.connect(function(sessionId)
//     {
//       stompClient.subscribe('CMT.MARKET.DATA.TICKER.QUEUE', function(body, headers)
//       {
//         /*
//         this callback function is invoked whenever our a client receives a message.
//         */
//        console.log("recd message from stomp");
//       });
//     });
  
//   };

const connectOptions = {
    //'host': 'nimbus',
    //'port': 61613,
    'host': 'localhost',
    
    'connectHeaders':{
      'host': '',
      'login': '',
      'passcode': ''//,
      //'heart-beat': '5000,5000'
    }
  };


  stompit.connect(connectOptions, function(error, client) {
  
    if (error) {
      console.log('connect error ' + error.message);
      return;
    }
    
    
    const subscribeHeaders = {
      'destination': 'CMT.MARKET.DATA.TICKER.QUEUE',
      'ack': 'client-individual'
    };
    
    client.on('error', (error) => {
      console.log("Error:" + error.message);
        client.connect();
    });

    client.subscribe(subscribeHeaders, function(error, message) {
      
      if (error) {
        console.log('subscribe error ' + error.message);
        return;
      }
      
      message.readString('utf-8', function(error, body) {
        
        if (error) {
          console.log('read message error ' + error.message);
          return;
        }
        
        console.log('received message: ' + body);
        
        client.ack(message);
        
        //client.disconnect();
        //client.connect();
      });
    });
  });

var data= "test data";
var option = {
    
    id : 0,
    optionName:"new option",
    strike:120,
    volatility:1,
    expiryDate:null,

    premium:10,
    format:0,
    formatColor:"White"
  };

app.use(express.static(path.join(__dirname,'dist/crudtest/')));

/* app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist/crudtest/index.html'));

}); */

app.get('*',function(req, res){//get,put,post,delete   
    res.sendFile(__dirname + '/dist/crudtest/index.html');
    //console.log
  });

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('new user connected');
    
    senddata(socket);

    socket.on('disconnect', ()=>{
        console.log('user dis-connected');
        
    });
    
    socket.on('getdata', (data)=>{
        
        console.log("recd from client" + data);
        //senddata(socket);
        
    });
});

function senddata(socket)
{
    var rnd = Math.floor(Math.random() * 97)+ 1;
    var rnd2 = Math.floor(Math.random() *4)+1 
    option.id = rnd;
    option.premium = rnd2 ;
    option.format = 1;//'#'+(Math.random()*0xFFFFFF<<0).toString(16); 
    socket.emit('data1',option);

     setTimeout(()=> {

         senddata(socket);
        console.log("Data From Server opId :" + option.id + "Price:" + option.premium);
        
        },200);

}

server.listen(port ,()=>{
    console.log(`Server listenign on port ${port}`);
});
