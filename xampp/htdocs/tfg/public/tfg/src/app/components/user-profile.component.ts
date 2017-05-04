import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';

@Component({
    selector: 'user-profile',
    templateUrl: '../templates/user-profile.component.html',
    styleUrls: ['../css/user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
    user: User;

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        this.route.data.subscribe((data: { user: User }) => {
            this.user = data.user;
        });
     }
}