import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserModel } from '../../loginservice/user-model';
import { UserServiceService } from '../../loginservice/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user:UserModel[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(  
    private userService : UserServiceService, 
    private _roter :Router
    ) { }

  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      
    };
    this.userService.GetUser().subscribe(data=>{
      this.user=data.sort((a,b) => b.id - a.id);
      
      this.dtTrigger.next();
    })

  }
  detailsUser(id:number){
    this._roter.navigate(['/userdetails',id]);
  }
  updateUser(id:number){
    this._roter.navigate(['/userupdate',id]);
  }
  deleteUser(id:number){
this.userService.DeleteUser(id).subscribe(data=>{
  this.userService.GetUser().subscribe(data=>{
    this.user=data.sort((a,b) => b.id - a.id);
  })
})
  }
}
