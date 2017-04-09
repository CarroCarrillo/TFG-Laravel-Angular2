import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-simple',
    templateUrl: '../../templates/headers/header-simple.component.html',
    styleUrls: ['../../css/headers/header-simple.component.css']
})

export class HeaderSimpleComponent implements OnInit {
    open: boolean;

    constructor() { }

    ngOnInit() { 
        this.open = false;
    }

    openLogin(){
        this.open = true;
    }
}