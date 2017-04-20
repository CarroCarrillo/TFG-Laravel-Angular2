import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-up',
    templateUrl: '../templates/sign-up.component.html',
    styleUrls: ['../css/sign-up.component.css']
})

export class SignUpComponent implements OnInit {
    user: User;
    password_confirm: string;

    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() {
        this.user = new User();
    }

    onSubmit() {
        console.log(this.user);
        this.api.createUser(this.user, this.password_confirm)
            .then(res => {
                this.router.navigate(['/login']);
            })
            .catch(error => {
                alert(error);
            });
    }
}