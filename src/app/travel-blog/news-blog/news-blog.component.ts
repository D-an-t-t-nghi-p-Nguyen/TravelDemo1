import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../loginservice/user';
import { UserServiceService } from '../../loginservice/user-service.service';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.css']
})
export class NewsBlogComponent implements OnInit {

  public isMenuCollapsed = true;
  user:User;
  urlavatar:string;
  role : number;

  constructor(private _serveceUser:UserServiceService,private _router:Router) {
    this._serveceUser.userEntity.subscribe(x => this.user = x);
    this._serveceUser.roleEntity.subscribe(y => this.role = y);
    this._serveceUser.AvatarEntity.subscribe(x => this.urlavatar = x)
   }

  ngOnInit(): void {
    this._serveceUser.findByEmailID(this.user).subscribe(data=>{
      this.user = data;
      this.urlavatar=   data?.avatar;
    })
  }
  logout(){
    this._serveceUser.logout()
  }

}
