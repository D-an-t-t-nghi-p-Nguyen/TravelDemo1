import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Vn } from '../../BlogTravelVn/vn';
import { VnService } from '../../BlogTravelVn/vn.service';

@Component({
  selector: 'app-blog-travel-vn',
  templateUrl: './blog-travel-vn.component.html',
  styleUrls: ['./blog-travel-vn.component.css']
})
export class BlogTravelVnComponent implements OnInit {

  vn:Vn[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private vnService:VnService,
    private router:Router,
    private httclient:HttpClient
    ) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      
    };
    this.vnService.GetBlog().subscribe(data =>{
      this.vn=data;
      this.dtTrigger.next();
    })
  }

  UpdateBlog(id:number){
    this.router.navigate(['travelvietnamupdate',id])
  }

  ViewBlog(id:number){
    this.router.navigate(['travelvietnamgetid',id])
  }

  deleteBlog(id:number){
    this.vnService.DeleteBlog(id).subscribe(data=>{
      this.vnService.GetBlog().subscribe(data=>{
        this.vn=data.sort((a,b) => b.id - a.id);
        console.log(data);
      })
    })
  }

}
