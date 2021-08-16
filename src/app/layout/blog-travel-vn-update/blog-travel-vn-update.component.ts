import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { VnService } from '../../BlogTravelVn/vn.service';

@Component({
  selector: 'app-blog-travel-vn-update',
  templateUrl: './blog-travel-vn-update.component.html',
  styleUrls: ['./blog-travel-vn-update.component.css']
})
export class BlogTravelVnUpdateComponent implements OnInit {

  OneFile:File=null
  formBlog : any;
  imageUrl:string = "";
  
  constructor(
    private blogService : VnService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck('id')
    ).subscribe(id =>{
      this.blogService.GetBlogById(id).subscribe(data =>{
        this.formBlog = new FormGroup({
          id: new FormControl(data.id),
          name  :new FormControl(data.name),
          address  :new FormControl(data.address),
          price :new FormControl(data.price),
          content :new FormControl(data.content),
          dateSubmit :new FormControl(data.dateSubmit),
          image :new FormControl(data.image)
        })
        this.imageUrl = "./../../../assets/images/"+ data.image
      })
    })
  }

  Selected(event){
    this.OneFile=event.target.files[0];
  }

  handleFileInput(file:FileList){
    this.OneFile = file.item(0);
  
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.OneFile);
  }


  Submit(){
    this.blogService.UpdatBlog(this.formBlog.value,this.formBlog.value.id).subscribe(data=>{
      if(this.OneFile != null){
        this.blogService.UploadFile(this.OneFile,data.id).subscribe(data=>{
          console.log(data);
        })

      }
      this.goToUserList();
    })

  }
  goToUserList(){
  this.router.navigate(['/travelvietnam'])
  }

}
