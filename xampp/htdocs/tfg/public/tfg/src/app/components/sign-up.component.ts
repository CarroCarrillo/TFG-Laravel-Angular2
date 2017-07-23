import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-up',
    templateUrl: '../templates/sign-up.component.html',
    styleUrls: ['../css/sign-up.component.css']
})

export class SignUpComponent implements OnInit, AfterViewChecked {
    user: User;
    password_confirm: string;
    email_already: boolean;
    username_already: boolean;
    password_repeat: boolean;

    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() {
        this.user = new User();
    }
    ngAfterViewChecked(){
        (<any>document.querySelector('mdl-js-textfield')).MaterialTextfield.checkDirty();
    }

    onSubmit() {
        this.api.createUser(this.user, this.password_confirm)
            .then(res => {
                this.router.navigate(['/inicio']);
            })
            .catch(error => {
               if(error.json()){
                   let e = error.json();
                   if(e["email"]){
                       this.email_already = true;
                   }
                   
                   if(e["username"]){
                       this.username_already = true;
                   }
               }
            });
    }
    
    emailChange(){
        this.email_already = false;
    }

    usernameChange(){
        this.username_already = false;
    }

    passwordRepeat(){
        return this.user.password == this.password_confirm;
    }
}