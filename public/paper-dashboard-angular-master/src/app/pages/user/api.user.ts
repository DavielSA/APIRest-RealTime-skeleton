import { API } from './../../api/api';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiLogin extends API {

    constructor(
        protected http: HttpClient,
        private route: ActivatedRoute
    ) {
        super(http)
    }

    public Profile() {
        
    }
  

    private GetArgs(): any {
        return this.route.snapshot.params;
    }

}
