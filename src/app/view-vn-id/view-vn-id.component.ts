import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { CommentRequest } from '../BlogTravelVn/comment-request';
import { Comments } from '../BlogTravelVn/comments';
import { Oder } from '../BlogTravelVn/oder';
import { OderRequest } from '../BlogTravelVn/oder-request';
import { Vn } from '../BlogTravelVn/vn';
import { VnRequest } from '../BlogTravelVn/vn-request';
import { VnService } from '../BlogTravelVn/vn.service';
import { User } from '../loginservice/user';
import { UserServiceService } from '../loginservice/user-service.service';

@Component({
  selector: 'app-view-vn-id',
  templateUrl: './view-vn-id.component.html',
  styleUrls: ['./view-vn-id.component.css']
})
export class ViewVnIdComponent implements OnInit {

  id:number;
  item:Vn;
  urlImage:string;
  user:User;
  urlavatar:string;
  role : number;
  oder1= new Oder();
  oders: OderRequest[];
  comment1=new Comments();
  comments: CommentRequest[];
  imageUrl: string;
  avatar:string;
  EmailId : string;
  //modal
  closeResult = '';
  model: any;

  constructor(private route:ActivatedRoute,
    private blogService:VnService,
    private _serveceUser:UserServiceService,
    private modalService: NgbModal
    ) {
      this._serveceUser.userEntity.subscribe(x => this.user = x);
      this._serveceUser.roleEntity.subscribe(y => this.role = y);
      this._serveceUser.AvatarEntity.subscribe(x => this.urlavatar = x)
     }
  
     logout(){
      this._serveceUser.logout()
    }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item = new Vn();
    this.blogService.GetBlogById(this.id).subscribe( data => {
      this.item=data;
        this.urlImage = "./../../../assets/images/" + data.image;
      console.log(this.urlImage);
    });
    this._serveceUser.findByEmailID(this.user).subscribe(data=>{
      this.user = data;
      this.urlavatar=   data?.avatar;
    });
    this.ListComment()
    this.ListOder()
    this.EmailId = localStorage.getItem('emailID');
    this.avatar = localStorage.getItem('avatar');
    this.avatar="../../assets/images/"+ this.avatar.split("\"")[1]
  }

  ListComment(){
    this.blogService.GetCommentByMotelId(this.id).subscribe(data=>{
      this.comments=data.sort((a,b) => b.id - a.id)
    })
  }
  ListOder(){
    this.blogService.GetOderByBlogId(this.id).subscribe(data =>{
      this.oders=data.sort((a,b) =>b.id - a.id)
    })
  }
  Submit(){
    const createMotelData ={
      comment: this.comment1.comment,
      email: this.EmailId.split("\"")[1],
      motel_id:this.id
    }

    this.blogService.AddComment(createMotelData).subscribe(data=>{
    this.ListComment()
    this.comment1.comment ="";
    })
  }
  ngSubmit(){
    const createBlogData = {
      dateGo: this.oder1.dateGo,
      amount: this.oder1.amount,
      number: this.oder1.number,
      email: this.EmailId.split("\"")[1],
      motel_id:this.id
    }
    this.blogService.AddOder(createBlogData).subscribe(data=>{
      this.ListOder()
      this.oder1.dateGo ="";
      this.oder1.number ="";
      this.oder1.amount ="";
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
