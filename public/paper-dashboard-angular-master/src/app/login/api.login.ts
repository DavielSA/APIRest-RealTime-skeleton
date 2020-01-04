import { API } from './../api/api';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiLogin extends API {

    constructor(
        protected http: HttpClient,
        private route: ActivatedRoute,
        private router: Router
    ) {
        super(http)
    }

    public getReturnUrl(): string {
        return (this.route.snapshot.queryParams
            && this.route.snapshot.queryParams.returnUrl)
            ? this.route.snapshot.queryParams.returnUrl
            : "/dashboard";
    }

    public Login(email: string, pass: string) {
        return this.http.post<any>(this.getUrl("login"), { "email": email, "pass": pass })
            .pipe(
                map((user: any) => {

                    if (user && user.token) {
                        this.sSession.setAuth(user.token);
                        this.router.navigate([this.getReturnUrl()], {});
                    }
                })
            );
    }

    private GetArgs(): any {
        return this.route.snapshot.params;
    }

    public logout() {
        this.sSession.setAuth(undefined);
    }


}
