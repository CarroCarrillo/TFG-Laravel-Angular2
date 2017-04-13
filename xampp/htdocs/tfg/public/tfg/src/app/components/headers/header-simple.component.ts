import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-simple',
    templateUrl: '../../templates/headers/header-simple.component.html',
    styleUrls: ['../../css/headers/header-simple.component.css']
})

export class HeaderSimpleComponent implements OnInit {
    open: boolean;

    constructor() {
        document.onclick = (e) => {
            console.log(this.open);
            console.log("Debería hacer algo");
            if (e.target == document.getElementById('login-menu') || !this.isChildOf(e.target, document.getElementById('login-menu'))) {
                this.open = false;
                console.log("Debería cerrarse");
            }
            console.log(this.open);
        }
    }

    ngOnInit() {
        this.open = false;
    }

    openLogin() {
        console.log(this.open);
        this.open = true;
    }

    isChildOf(child, parent) {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return this.isChildOf(child.parentNode, parent);
        }
    }
}