const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port =  5000;

app.use(express.static(path.join(__dirname,'dist/crudtest/')));

/* app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist/crudtest/index.html'));

}); */

app.get('*',function(req, res){//get,put,post,delete   
    res.sendFile(__dirname + '/dist/crudtest/index.html');
    //console.log
  });

const server = http.createServer(app);

const io = socketIO('server');

io.on('connection',()=>{
    console.log('new user connected');
    
    socket.on('disconnect', ()=>{
        console.log('user dis-connected');
        
    });
});

server.listen(port ,()=>{
    console.log('Server listenign on port ${port}');
});