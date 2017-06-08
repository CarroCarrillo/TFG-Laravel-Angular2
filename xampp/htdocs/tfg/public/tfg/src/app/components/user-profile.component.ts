import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';
import { Image } from '../models/image';

@Component({
    selector: 'user-profile',
    templateUrl: '../templates/user-profile.component.html',
    styleUrls: ['../css/user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
    private _user: User;
    private _images: Image[];

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        this.route.data.subscribe((data: { user: User }) => {
            this._user = data.user;
        });

        this.api.getUserImages(this._user.id).then(res => {
            this._images = res;
        });
     }
}