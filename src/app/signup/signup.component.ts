import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleModel } from '../loginservice/role-model';
import { UserModel } from '../loginservice/user-model';
import { UserServiceService } from '../loginservice/user-service.service';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    listRole: RoleModel[];
    user = new UserModel();
    selectedrole: number=2 ;
  
    constructor(private userService: UserServiceService, private _roter: Router) { }
    OneFile: File = null
  
    ngOnInit(): void {
   this.AddRoles();
  
    }
    Selected(event) {
      this.OneFile = event.target.files[0];
    }
    selectRoles (event){
      this.selectedrole = event.target.value;
    }
    Submit() {
      const registerData = {
        userName : this.user.userName,
        emailId  : this.user.emailId,
        password : this.user.password,
        role_id : this.selectedrole
      }
      console.log(registerData);
      this.userService.SaveUser(registerData).subscribe(data => {
        this.userService.UploadFile(this.OneFile, data.id).subscribe(data => {
          console.log(data);
          this.goToUserList();
        })
  
      })
    }
  
    goToUserList() {
      this._roter.navigate(['/login'])
    }
  
    AddRoles(){
      this.userService.GetRole().subscribe(
        response => {
          this.listRole = response
        }
      );
    }
  
}
