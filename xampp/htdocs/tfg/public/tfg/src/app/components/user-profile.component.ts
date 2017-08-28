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
    private _file: File;
    private _page: number;
    @ViewChild("newImageProfile") _inputFile: ElementRef;
    @ViewChild("imgProfile") _imgProfile: ElementRef;

    constructor(private _router: Router, private _route: ActivatedRoute, private _api: ApiService) {
        this._page = 0;
     }

    ngOnInit() {
        this._route.data.subscribe((data: { user: User }) => {
            this._user = data.user;
        });

        this._api.getUserImages(this._user.id, { page: this._page }).then(res => {
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
         this._file = null;
     }

     saveEdition()
     {
         this._saving = true;

         if(this._file){
            let formData = new FormData();
            formData.append("file", this._file);

            this._api.uploadFile(formData).then(res => {
                if (res) {
                    this._user.profile_image = '../../assets/data/' + res;
                    this.updateMe();
                }
            });
        }
        else{
            this.updateMe();
        }
    }

    private updateMe(){
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

    onChangeFile(image) {
        var fr = new FileReader();
        let self = this;

        fr.onload = function () {
            self._imgProfile.nativeElement.src = fr.result;
        };

        fr.readAsDataURL(image);
        this._file = image;
    }

    onScroll(event)
    {
        let target = event.target;
        if(target.scrollTop + 1 >= target.scrollHeight - target.clientHeight) {
            this._page++;
            this._api.getLastImages({ page: this._page }).then(res => {
                if (res) {
                    this._images = this._images.concat(res);
                }
            });
        }
    }
}