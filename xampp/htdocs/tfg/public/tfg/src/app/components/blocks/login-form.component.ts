import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    error: boolean;
    @Output() errorEmitter: EventEmitter<boolean>;

    constructor(private api: ApiService, private router: Router) { 
        this.errorEmitter = new EventEmitter<boolean>();
    }

    ngOnInit() {
        this.logging = false;
        this.error = false;
        this.errorEmitter.emit(this.error);
     }

    login() {
        this.logging = true;
        this.error = false;
        this.errorEmitter.emit(this.error);
        this.api.getToken(this.username, this.password).then(res => {
            this.api.loggedInChanged$.subscribe(() => {
                if (this.api.loggedin) {
                   // Correcto inicio de sesión
                }
            });
        }).catch(error => {
            this.error = true;
            this.errorEmitter.emit(this.error);
            this.logging = false;
        });
    }
}