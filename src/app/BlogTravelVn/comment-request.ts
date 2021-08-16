export class CommentRequest{
  id ? :number;
  comment :string;
  userId :{
    id:number;
    avatar?:string;
    userName?:string;
  };
  motel_id:{
    id:number
  }
  datecomment:Date
}
