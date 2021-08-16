import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentRequest } from '../BlogTravelVn/comment-request';
import { Comments } from '../BlogTravelVn/comments';
import { Oder } from '../BlogTravelVn/oder';
import { OderRequest } from '../BlogTravelVn/oder-request';
import { Vn } from '../BlogTravelVn/vn';
import { VnService } from '../BlogTravelVn/vn.service';
import { User } from '../loginservice/user';
import { UserServiceService } from '../loginservice/user-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

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

  ngOnInit(): void {
    this._serveceUser.findByEmailID(this.user).subscribe(data=>{
      this.user = data;
      this.urlavatar=   data?.avatar;
    });
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
    this.EmailId = localStorage.getItem('emailID');
    this.avatar = localStorage.getItem('avatar');
  }

  ListComment(){
    this.blogService.GetCommentByMotelId(this.id).subscribe(data=>{
      this.comments=data.sort((a,b) => b.id - a.id)
    })
  }

  logout(){
    this._serveceUser.logout()
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
