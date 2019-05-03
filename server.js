/// 3.17.59.95
//ssh -i atiraj_aws.pem ec2-user@3.17.59.95
//localhost:8161 for ActiveMq

const express = require('express');
var Stomp = require('stomp-client');
const stompit = require('stompit');

const app = express();

const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const port =  5000;

var data= "test data";
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

const server = http.createServer(app);

const io = socketIO(server);


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

  io.on('connection',(socket)=>{
    console.log('new user connected');

    //Start Stomp
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
        senddata(socket);  
        setTimeout(()=> {
          client.ack(message);
         },200);

                
        //client.disconnect();
        //client.connect();
      });
    });
  });
//End Stomp


    //senddata(socket);

    socket.on('disconnect', ()=>{
        console.log('user dis-connected');
        
    });
    
    socket.on('getdata', (data)=>{
        
        console.log("recd from client" + data);
        senddata(socket);
        
    });
});


app.use(express.static(path.join(__dirname,'dist/crudtest/')));

/* app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist/crudtest/index.html'));

}); */

app.get('*',function(req, res){//get,put,post,delete   
    res.sendFile(__dirname + '/dist/crudtest/index.html');
    //console.log
  });



function senddata(socket)
{
    var rnd = Math.floor(Math.random() * 97)+ 1;
    var rnd2 = Math.floor(Math.random() *4)+1
    
    option.stockName = "AAPL" + rnd;
      option.optionName = "AAPL190412C00130000-" + rnd;
      
      option.strike = rnd*100;
      option.volatility = .05;
      option.expiryDate = new Date('12/25/1988');
      option.stockPrice = 100;
      option.optionPrice = rnd2 * rnd;
      option.lastUpdatedTime =  Date.now().toString();
      
      option.format=0;
      option.formatColor="White";
       
      socket.emit('data1',option);

    //  setTimeout(()=> {

    //      senddata(socket);
         console.log("Data From Server opId :" + option.optionName + "Price:" + option.optionPrice);
        
    //     },200);

}

server.listen(port ,()=>{
    console.log(`Server listenign on port ${port}`);
});
