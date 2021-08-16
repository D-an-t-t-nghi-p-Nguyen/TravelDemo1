import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vn } from '../../BlogTravelVn/vn';
import { VnService } from '../../BlogTravelVn/vn.service';

@Component({
  selector: 'app-blog-travel-vn-get-id',
  templateUrl: './blog-travel-vn-get-id.component.html',
  styleUrls: ['./blog-travel-vn-get-id.component.css']
})
export class BlogTravelVnGetIdComponent implements OnInit {

  id:number;
  item:Vn;

  urlImage:string;
  constructor(private route:ActivatedRoute,
    private blogService:VnService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item = new Vn();
    this.blogService.GetBlogById(this.id).subscribe( data => {
      this.item=data;
        this.urlImage = "./../../../assets/images/" + data.image;
      console.log(this.urlImage);
    });
  }

}
