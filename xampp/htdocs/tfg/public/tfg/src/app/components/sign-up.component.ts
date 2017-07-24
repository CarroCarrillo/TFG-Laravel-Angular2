import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'sign-up',
    templateUrl: '../templates/sign-up.component.html',
    styleUrls: ['../css/sign-up.component.css']
})

export class SignUpComponent implements OnInit {
    user: User;
    password_confirm: string;
    email_already: boolean;
    username_already: boolean;
    password_repeat: boolean;
    loading: boolean;
    form: FormGroup;

    constructor(private api: ApiService, private router: Router, private fb: FormBuilder) { 
        this.user = new User(); 
        
        this.form = fb.group({
            'username': this.user.username,
            'email': this.user.email,
            'name': this.user.name,
            'surname': this.user.surname,
            'password': this.user.password,
            'password_confirm': this.password_confirm
        });
    }

    ngOnInit() {
        
    }

    onSubmit() {
        this.loading = true;
        this.user = this.form.value;
        this.password_confirm = this.form.value.password_confirm;
        this.api.createUser(this.user, this.password_confirm)
            .then(res => {
                this.router.navigate(['/inicio']);
                this.loading = false;
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

               this.loading = false;
            });
    }
    
    emailChange(){
        this.email_already = false;
    }

    usernameChange(){
        this.username_already = false;
    }

    passwordRepeat(){
        return this.form.value.password == this.form.value.password_confirm;
    }
}