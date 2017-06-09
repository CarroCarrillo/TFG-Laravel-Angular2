import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
    private _auxUser: User;
    private _images: Image[];
    private _edit: boolean;
    private _saving: boolean;
    @ViewChild("newImageProfile") _inputFile: ElementRef;

    constructor(private _router: Router, private _route: ActivatedRoute, private _api: ApiService) { }

    ngOnInit() {
        this._route.data.subscribe((data: { user: User }) => {
            this._user = data.user;
        });

        this._api.getUserImages(this._user.id).then(res => {
            this._images = res;
        });

        this._saving = false;
     }

     editProfile()
     {
         this._auxUser = new User();
         this._auxUser.fromData(this._user);
         this._edit = true;
     }

     cancelEdition()
     {
         this._user = new User();
         this._user.fromData(this._auxUser);
         this._edit = false;
     }

     saveEdition()
     {
         this._saving = true;
         this._api.updateMe(this._user).then(res => {
             this._user = res;
             this._edit = false;
             this._saving = false;
         }).catch(error => {
             this._saving = false;
         });
     }

     changeProfileImage(){
         console.log(this._inputFile);
         this._inputFile.nativeElement.click();
     }
}