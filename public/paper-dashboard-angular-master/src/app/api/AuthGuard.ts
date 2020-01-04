import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Session } from './session';

@Injectable()
export class AuthGuard implements CanActivate {
    private sSession:Session;
    constructor(private router: Router) { 
        this.sSession = new Session();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token:string = this.sSession.getAuth();
        if (token && token!='') {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}