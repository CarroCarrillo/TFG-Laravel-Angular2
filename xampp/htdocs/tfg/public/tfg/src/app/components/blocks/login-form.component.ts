import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-form',
    templateUrl: '../../templates/blocks/login-form.component.html',
    styleUrls: ['../../css/blocks/login-form.component.css']
})

export class LoginFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onSubmit(){
        console.log("Enviar");
    }
}