import { Injectable, Inject } from "@angular/core"
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class Session {
    private prefix_: string = "session_oasdklsdkla12i_";
    constructor(){}
    
    public setAuth(token:string) {
        sessionStorage.setItem(this.prefix_, token);
    }
    public getAuth():string {
        return sessionStorage.getItem(this.prefix_);
    }

}