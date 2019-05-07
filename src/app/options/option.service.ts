import { Injectable } from '@angular/core';
import { Option } from "../models/Option.model";
import { Observable,BehaviorSubject, of, observable, from } from '../../../node_modules/rxjs';
import { catchError, observeOn } from 'rxjs/operators';
import { ObserveOnOperator } from '../../../node_modules/rxjs/internal/operators/observeOn';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
constructor(private httpClient:HttpClient){}

   private listOption:Option[]=[];
   //private op:Option;
  //=[
  //   {
  //     id : 1,
  //     name:'OP-1',
  //     expiryDate:new Date('10/25/1988'),
  //     strikePrice:300,
  //     premium:10,
  //     format:0,
  //     formatColor:"White"
  //   } 
  // ];

 public getOptionRedis(){
    var redisOptions; 
    var op: Option; 
    return this.httpClient.get<Option[]>("/options");//
    
}

 public getOption():Observable<Option[]>{
      return  of(this.listOption);

  }

public newOption(option:Option):void{
    this.listOption.push(option);
}

public editOption(option:Option):void{
  option.optionName = "Option  changed";
  option.format = 1;
  
}

}
