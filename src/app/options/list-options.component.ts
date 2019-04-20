import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option.model';
import { OptionService } from './option.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.css']
})
export class ListOptionsComponent implements OnInit {
  socket;
  op:Option={
    id : null,
    name:null,
    expiryDate:null,
    strikePrice:null,
    premium:10,
    format:0
  };
  
  trackByOptionCode(index:number,option:any):number{
  return option.id;

  }
  
  
  options: Option[];
  constructor(private _optionService:OptionService) {
    this.socket = io("http://localhost:5000");
   }

   

  ngOnInit() {
    //this.options = this._optionService.getOption();
    this._optionService.getOption().subscribe(optionList=>{
      this.options=optionList;
    });
    this.addOption();

    this.socket.on('data1',(res)=>{
      console.log("data emitted from server" + res.id +";" + ";" + res.name)
    
      
      console.log(res.id);  
      var oppp = this.options;
      oppp[res.id].format = 1;//(Math.random()*0xFFFFFF<<0).toString(16);
      oppp[res.id].premium = res.id * 5;
        
    });
  }

  editOption(option:Option){
    this._optionService.editOption(option);
  }

  addOption(){
    var len = this.options.length;
    for (let i = len+1; i < len+22; i++) {
      this.op = new Option();
      this.op.name = "OP-" + i;
      this.op.id = i;
      this.op.expiryDate = new Date('12/25/1988')
      this.op.premium = i*10;
      this.op.strikePrice = i*100;
      this.op.format=0;
      this._optionService.newOption(this.op);
      }
      //this.randOption();
    }

    randOption(){
      //for (let i = 1; i < 5000; i++) {
      
      var len = this.options.length;
      //alert(len);
      var rnd = Math.floor(Math.random() * len-1) + 1 
     //alert("random:" + rnd);
      console.log(rnd);  
      var oppp = this.options;
      oppp[rnd].format =1;
      oppp[rnd].premium = rnd;
      //alert(oppp[rnd]);
      //}  
      
  }

  }
