const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const port =  5000;

var data= "test data";

var option = {
    
    id : 0,
    name:"new option",
    expiryDate:null,
    strikePrice:120,
    premium:10
    
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
    socket.emit('data1',option);

    setTimeout(()=> {

        senddata(socket);
        console.log("Hello from server");
        
       },3000);

}

server.listen(port ,()=>{
    console.log('Server listenign on port ${port}');
});

