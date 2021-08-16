import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from '../../loginservice/role-model';
import { UserServiceService } from '../../loginservice/user-service.service';

import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(
    private userService : UserServiceService,
    private _acRoute : ActivatedRoute,
    private _roter:Router) {
    this.userService.roleEntity.subscribe(y => this.role = y);
   }
  OneFile:File=null
  imageUrl:string = "";
  formUser : any;
  url : string;
  listRole: RoleModel[];
  role :number;

  ngOnInit(): void {
  this._acRoute.params.pipe(
      pluck('id')
    ).subscribe(id=>{
      this.userService.GetUserById(id).subscribe(data=>{
        this.formUser = new FormGroup({
          id : new FormControl(data.id),
          userName : new FormControl(data.userName),
          emailId :new FormControl(data.emailId),
          password :new FormControl(data.password),
          avatar : new FormControl(data.avatar),
          role_id :new  FormControl(data.role_id.id),
        })
        this.url = data.avatar;
      })
    })
    this.ListRoles();

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
    this.userService.UpdateUser(this.formUser.value,this.formUser.value.id).subscribe(data=>{
      if(this.OneFile != null){
        this.userService.UploadFile(this.OneFile,data.id).subscribe(data=>{
        })
      }
      this.goToUserList();
    })

}
goToUserList(){
  this._roter.navigate(['/userlist'])
}
ListRoles(){
  this.userService.GetRole().subscribe(
    response => {
      this.listRole = response
    }
  );
}
}
