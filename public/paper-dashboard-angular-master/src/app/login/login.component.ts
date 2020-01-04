import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiLogin } from './api.login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: FormControl;
  public pass: FormControl;
  constructor(private serviceLogin: ApiLogin) {
    this.email = new FormControl("daviel.sanchez@topdigital.es");
    this.pass = new FormControl("daviel");
  }

  ngOnInit() { }

  onClickSubmit() {
    this.serviceLogin
      .Login(this.email.value, this.pass.value)
      .toPromise()
      .catch((r: any) => {
        console.log(2);
      });
  }

}
