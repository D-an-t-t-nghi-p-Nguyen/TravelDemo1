import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { User } from '../../loginservice/user';
import { Vn } from '../../BlogTravelVn/vn';
import { VnService } from '../../BlogTravelVn/vn.service';
import { UserServiceService } from '../../loginservice/user-service.service';

@Component({
  selector: 'app-features-blog',
  templateUrl: './features-blog.component.html',
  styleUrls: ['./features-blog.component.css']
})
export class FeaturesBlogComponent implements OnInit {

  vn:Vn[];
  public isMenuCollapsed = true;
  user:User;
  urlavatar:string;
  role : number;
  constructor(
    private vnservice:VnService,
    private router:Router,
    private _serveceUser:UserServiceService
  ) {
    this._serveceUser.userEntity.subscribe(x => this.user = x);
    this._serveceUser.roleEntity.subscribe(y => this.role = y);
    this._serveceUser.AvatarEntity.subscribe(x => this.urlavatar = x) }

  ngOnInit(): void {
    this._serveceUser.findByEmailID(this.user).subscribe(data=>{
      this.user = data;
      this.urlavatar=   data?.avatar;
    });
    this.vnservice.GetBlog().subscribe(data =>{
      this.vn=data;
    });
  }

  ViewBlogVn(id:number){
    this.router.navigate(['viewvn',id])
  }
  ViewBlog(id:number){
    this.router.navigate(['view',id])
  }

  logout(){
    this._serveceUser.logout()
  }



}
