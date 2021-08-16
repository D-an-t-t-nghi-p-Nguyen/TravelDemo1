import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from '../../loginservice/user-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
    // role: number;
    // constructor(private router: Router,private _service:UserServiceService) {
    //     this._service.roleEntity.subscribe(y => this.role = y)
    // }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const user = this._service.userValue && this.role===1 ;  
    //     if (user) {
         
    //         return true;
    //     }


    //     this.router.navigate(['/ahometravel'], { queryParams: { returnUrl: state.url }});
    //     return false;
    // }

    role : number;
    constructor(
        private _serveceUser : UserServiceService,
         private _router : Router
         
    ) {this._serveceUser.roleEntity.subscribe(y => this.role = y);}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this._serveceUser.userValue && this.role ==1 ;
        if (user ) {
            // authorised so return true
            return true;
        }else{
            this._router.navigate(['ahometravel'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
    
}
@Injectable({ providedIn: 'root' })
export class AuthGuard_User implements CanActivate {
    constructor(
        private _serveceUser : UserServiceService,
         private _router : Router
         
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this._serveceUser.userValue  ;
        if (user ) {
            // authorised so return true
            return true;
        }


        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
