import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option.model';
import { OptionService } from './option.service';

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.css']
})
export class ListOptionsComponent implements OnInit {
  
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
  constructor(private _optionService:OptionService) { }

  ngOnInit() {
    //this.options = this._optionService.getOption();
    this._optionService.getOption().subscribe(optionList=>{
      this.options=optionList;
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
      this.op.format=1;
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
      
      oppp[rnd].premium = rnd;
      //alert(oppp[rnd]);
      //}  
      
  }


  }
