import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Option } from '../models/option.model';
import { OptionService } from './option.service';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { DatePipe,formatDate } from '@angular/common';
@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOptionsComponent implements OnInit {
  socket;
  op:Option;
  private minTime:any;// = Date.now();
  private maxTime:any;//=Date.now();
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
    //this.totalRec =100;
    //this.options = this._optionService.getOption();
    this._optionService.getOption().subscribe(optionList=>{
      this.options=optionList;
    });
    this.addOption();

    this.socket.on('data1',(res)=>{
      console.log("data emitted from server" + res.id +";" + ";" + res.name)
    
    //  console.log(res.id);  
      var oppp = this.options ;
      var selOptions = this.options.filter(op=>op.optionName.toLowerCase().indexOf(res.optionName.toLowerCase()) !=-1);
      
      if (selOptions.length <=0)
        this.options.push(res);
      else
      {
        var selOption = selOptions[0];
        if (res.optionPrice >=selOption.optionPrice)
            selOption.formatColor = "Red";
        else if(res.premium ==selOption.optionPrice)
            selOption.formatColor = "White";
        else
          selOption.formatColor = "Green";
      }
      this.minTime = res.lastUpdatedTime ;
      selOption.optionPrice = res.optionPrice;
        console.log(selOption.formatColor);
        
    });
  }

  editOption(option:Option){
    this._optionService.editOption(option);
  }
  
  addOption(){
  //var len = this.options.length;
    for (let i = 1; i < 100; i++) {
      
      
      
      this.op = new Option();
      //this.op.id = i.toString();
      this.op.stockName = "AAPL";
      this.op.optionName = "AAPL190412C00130000-" + i;
      
      this.op.strike = i*100;
      this.op.volatility = .05;
      this.op.expiryDate = new Date('12/25/1988');
      this.op.stockPrice = 100;
      this.op.optionPrice = 10;
      this.op.lastUpdatedTime =  formatDate(Date.now(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '');
      
      this.op.format=0;
      this.op.formatColor="White";
      this._optionService.newOption(this.op);
      }
    
    }

    

  }
