import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-simple',
    templateUrl: '../../templates/headers/header-simple.component.html',
    styleUrls: ['../../css/headers/header-simple.component.css']
})

export class HeaderSimpleComponent implements OnInit {
    open: boolean = false;

    constructor() { }

    ngOnInit() {
        window.addEventListener('click', e => {
            if (e.target != document.getElementById('login-menu') && e.target != document.getElementById('login-link')
            && !this.isChildOf(e.target, document.getElementById('login-menu'))) {
                this.open = false
            }
        });
    }

    openLogin() {
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