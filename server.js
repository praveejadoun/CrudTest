const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const port =  5000;

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
        
       },20);

}

server.listen(port ,()=>{
    console.log(`Server listenign on port ${port}`);
});

