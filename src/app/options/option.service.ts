import { Injectable } from '@angular/core';
import { Option } from "../models/Option.model";
import { Observable,BehaviorSubject, of, observable, from } from '../../../node_modules/rxjs';
import { catchError, observeOn } from 'rxjs/operators';
import { ObserveOnOperator } from '../../../node_modules/rxjs/internal/operators/observeOn';


@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private listOption:Option[]=[
    {
      id : 1,
      name:'OP-1',
      expiryDate:new Date('10/25/1988'),
      strikePrice:300,
      premium:10
      
    } 
  ];

 public getOption():Observable<Option[]>{
      return  of(this.listOption);

  }

public newOption(option:Option):void{
    this.listOption.push(option);
}

public editOption(option:Option):void{
  option.name = "Option  changed";
}

}
