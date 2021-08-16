import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { UserModel } from './user-model';
import { RoleModel } from './role-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userSubject: BehaviorSubject<User>;
  private roleSubject: BehaviorSubject<number>;
  private AvatarSubject: BehaviorSubject<string>;
  public userEntity: Observable<User>;
  public roleEntity: Observable<number>;
  public AvatarEntity: Observable<string>;


  private baseURL = "http://localhost:8080/api/v1";

  constructor(private _http :HttpClient,private _router:Router,  private route: ActivatedRoute) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('emailID')) );
    this.roleSubject = new BehaviorSubject<number>(JSON.parse(localStorage.getItem('role')) );
    this.AvatarSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('avatar')) );

      this.userEntity = this.userSubject.asObservable();
      this.roleEntity = this.roleSubject.asObservable();
      this.AvatarEntity = this.AvatarSubject.asObservable();

   }

  GetUser(){
    return this._http.get<UserModel[]>(`${this.baseURL}/user`);
  }
  GetRole(){
    return this._http.get<RoleModel[]>(`${this.baseURL}/roles`);
  }

  SaveUser(userEntity:UserModel){
    return this._http.post<UserModel>(`${this.baseURL}/user`,userEntity);

  }
  UploadFile(file: File,id){
    const formData=new FormData();
    formData.append('file',file);
    return this._http.post<UserModel>(`${this.baseURL}/user/upload/${id}`,formData);
  }

  GetUserById(id:number){
    return this._http.get<User>(`${this.baseURL}/user/${id}`);
  }
  UpdateUser(userEntity:UserModel,id:number){
  return this._http.put<UserModel>(`${this.baseURL}/user/${id}`,userEntity);
}
DeleteUser(id:number){
  return this._http.delete<Boolean>(`${this.baseURL}/user/${id}`);
}

LoginUser(userEntity:UserModel){
  return this._http.post<User>(`${this.baseURL}/login`,userEntity)
  .pipe(map(userEntity => {
    this.userSubject.next(userEntity);
    this.roleSubject.next(userEntity.role_id.id);
    this.AvatarSubject.next(userEntity.avatar);
   return userEntity;
}));
}

public get userValue(): User {
  return this.userSubject.value;
}
logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('emailID');
  localStorage.removeItem('role');
  localStorage.removeItem('avatar');
  this.userSubject.next(null);
  this._router.navigate(['']);
}
findByEmailID(emailId :User){
  return this._http.get<User>(`${this.baseURL}/user-findByEmail/${emailId}`);
}
}
