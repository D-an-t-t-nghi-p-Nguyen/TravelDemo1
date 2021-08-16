export class Vn {
    id?:number;
    name:string;
    address:string;
    price:number;
    content:string;
    image:string;
    dateSubmit:string;
    user_id?: {
        emailId?: string | number;
        userName?: string;
        role_id?: {
          name?: string;
        }
    }
}
