import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../loginservice/user';
import { UserServiceService } from '../../../loginservice/user-service.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    user:User;
    role : number;

    constructor(
        public router: Router,
        private _serveceUser:UserServiceService
        ) {
            this._serveceUser.userEntity.subscribe(x => this.user = x);
            this._serveceUser.roleEntity.subscribe(y => this.role = y);
            this.router.events.subscribe((val) => {
                if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                    this.toggleSidebar();
                }
            });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this._serveceUser.findByEmailID(this.user).subscribe(data=>{
            this.user = data;
          })
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    logout(){
        this._serveceUser.logout()
      }

}
