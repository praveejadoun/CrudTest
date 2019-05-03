// export class Option {
//     id : number;
//     name:string;
//     expiryDate:Date;
//     strikePrice?:number;
//     premium?:number;
//     format:number;
//     formatColor:string;
// }


export class Option {
     id :string;
     stockName:string;
     optionName:string;
     strike:number
     volatility:number;
     expiryDate: Date;
     stockPrice:number;
     optionPrice:number;
     lastUpdatedTime:string;
     format:number;
     formatColor:string;
 }