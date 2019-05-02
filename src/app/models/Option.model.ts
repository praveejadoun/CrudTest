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
     optionName:string;
     strike:number
     volatility:number;
     expiryDate: Date;
     premium?:number;
     pricedOn:string;
     format:number;
     formatColor:string;
 }