import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Option } from '../models/option.model';
import { OptionService } from './option.service';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOptionsComponent implements OnInit {
  socket;
  op:Option;
  minTime:any = Date.now();
  maxTime:any=Date.now();
  totalTime:any;
  totalRec : number = 100;
  page: number = 1;

  trackByOptionCode(index:number,option:any):number{
  return option.id;

  }
  
  
  options: Option[];
  constructor(private _optionService:OptionService) {
    
    this.socket = io(environment.webSocketURL);
   }

   

  ngOnInit() {
    this.page=1;
    this.totalRec =100;
    //this.options = this._optionService.getOption();
    this._optionService.getOption().subscribe(optionList=>{
      this.options=optionList;
    });
    this.addOption();

    this.socket.on('data1',(res)=>{
      console.log("data emitted from server" + res.id +";" + ";" + res.name)
    
      
      console.log(res.id);  
      var oppp = this.options;
      if (res.premium >=oppp[res.id].premium )
        oppp[res.id].formatColor = "Red";
      else if(res.premium ==oppp[res.id].premium)
        oppp[res.id].formatColor = "White";
      else
      oppp[res.id].formatColor = "Green";
      
      oppp[res.id].premium = res.premium;
      console.log(oppp[res.id].formatColor);
        
    });
  }

  editOption(option:Option){
    this._optionService.editOption(option);
  }
  
  addOption(){
  //var len = this.options.length;
    for (let i = 1; i < 100; i++) {
      this.op = new Option();
      this.op.id = i.toString();
      this.op.optionName = "AAPL190412C00130000-" + i;
      this.op.strike = i*100;
      this.op.volatility = .05;
      this.op.expiryDate = new Date('12/25/1988')
      this.op.premium = i*10;
      this.op.format=0;
      this.op.formatColor="White";
      this._optionService.newOption(this.op);
      }
      //this.randOption();
    }

    randOption(){
      
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
