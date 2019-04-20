import { Component, OnInit } from '@angular/core';
//import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  socket: any;
  title = 'Option Test';
 constructor(){
  //this.socket = io("http://localhost:5000");
 }

 ngOnInit(){
  //this.socket.on('data1',(res)=>{
  //console.log("data emitted" + res);
  //});

 }

}
