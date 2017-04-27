import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import { Token } from '../../models/token';

@Component({
    selector: 'login-form',
    templateUrl: '../../templates/blocks/login-form.component.html',
    styleUrls: ['../../css/blocks/login-form.component.css']
})

export class LoginFormComponent implements OnInit {
    username: string;
    password: string;
    logging: boolean;

    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() {
        this.logging = false;
     }

    login() {
        this.logging = true;
        this.api.getToken(this.username, this.password).then(res => {
            this.api.loggedInChanged$.subscribe(() => {
                if (this.api.loggedin) {
                   // Correcto inicio de sesión
                }
            });
        })
    }
}