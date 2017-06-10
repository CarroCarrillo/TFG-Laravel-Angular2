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

    public imageForm = this.fb.group({
        contributor: [this.image.contributor],
        coverage: [this.image.coverage],
        creator: [this.image.creator],
        date: [this.image.date],
        description: [this.image.description],
        format: [this.image.format],
        identifier: [this.image.identifier],
        language: [this.image.language],
        publisher: [this.image.publisher],
        relation: [this.image.relation],
        rights: [this.image.rights],
        source: [this.image.source],
        subject: [this.image.subject],
        title: [this.image.title],
        type: [this.image.type]
    });

    constructor(private apiService: ApiService, private fb: FormBuilder, private _router: Router) { }

    ngOnInit() { }

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
        this.image = this.imageForm.value;
        let formData = new FormData();
        formData.append("file", this.file);

        this.apiService.uploadFile(formData).then(res => {
            if (res) {
                this.image.hashedName = res;
                this.apiService.createImage(this.image).then(image => {
                    console.log(image);
                    this._router.navigate(['/imagen', image.id]);
                    //TODO Ir a detalle
                });
            }
        });

    }
}