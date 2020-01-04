import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'



@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    public name:FormControl;
    public email:FormControl;
    public surname:FormControl;
    public password:FormControl;
    public password1:FormControl;
    public address:FormControl;
    public city:FormControl;
    public country:FormControl;
    public zipcode:FormControl;
    public aboutme:FormControl;

    constructor(){
        this.name = new FormControl("Daviel");
        this.email = new FormControl("daviel.sanchez@topdigital.es");
        this.surname = new FormControl("Sánchez Almeida");
        this.password = new FormControl("");
        this.password1 = new FormControl("");
        this.address = new FormControl("Melbourne, Australia");
        this.city = new FormControl("Melbourne");
        this.country = new FormControl("Australia");
        this.zipcode = new FormControl();
        this.aboutme = new FormControl("Oh so, your weak rhyme You doubt I'll bother, reading into it");
    }

    ngOnInit(){
    }
}
 