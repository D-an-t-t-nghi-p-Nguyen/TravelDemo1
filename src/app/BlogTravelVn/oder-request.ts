export class OderRequest {
    id ? :number;
    dateGo:string;
    amount:string;
    number :string;
    userId :{
      id:number;
      avatar?:string;
      userName?:string;
    };
    motel_id:{
      id:number
    }
    dateBooking?:Date
}
