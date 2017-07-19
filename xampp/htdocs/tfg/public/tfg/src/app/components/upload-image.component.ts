import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import { Image } from '../models/image';
import '../../../node_modules/tags-input/tags-input.js';

@Component({
    selector: 'upload-image',
    templateUrl: '../templates/upload-image.component.html',
    styleUrls: ['../css/upload-image.component.css', '../../../node_modules/tags-input/tags-input.css']
})

export class UploadImageComponent implements OnInit {
    image: Image = new Image();
    file: File;
    uploading: boolean;
    tags: string[];

    public imageForm = this.fb.group({
        contributor: [""],
        coverage: [""],
        creator: [""],
        date: [""],
        description: [""],
        format: [""],
        identifier: [""],
        language: [""],
        publisher: [""],
        relation: [""],
        rights: [""],
        source: [""],
        subject: [ new Array<string>() ],
        title: ["", Validators.required],
        type: [""]
    });

    constructor(private apiService: ApiService, private fb: FormBuilder, private _router: Router) { }

    ngOnInit() { 
        this.uploading = false;
        this.tags = new Array<string>();
    }

    onChangeFile(image) {
        var fr = new FileReader();

        fr.onload = function () {
            (<HTMLImageElement>document.getElementById("newImg")).src = fr.result;
            (<HTMLInputElement>document.getElementById("newImgName")).value = image.name;
        };

        fr.readAsDataURL(image);
        this.file = image;
    }

    onSubmit() {
        this.uploading = true;
        this.image = this.imageForm.value;
        if(this.imageForm.value.subject) this.image.subject = this.imageForm.value.subject.join('/');
        if(this.image.date) this.image.date = new Date(this.image.date);
        console.log(this.image);
        let formData = new FormData();
        formData.append("file", this.file);

        this.apiService.uploadFile(formData).then(res => {
            if (res) {
                this.image.hashedName = res;
                this.apiService.createImage(this.image).then(image => {
                    console.log(image);
                    this._router.navigate(['/imagen', image.id]);
                    //TODO Ir a detalle
                }).catch(erro => {
                    this.uploading = false;
                });
            }
        }).catch(error => {
            this.uploading = false;
        });

    }
}