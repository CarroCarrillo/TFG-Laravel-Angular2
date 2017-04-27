import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { Image } from '../models/image';

@Component({
    selector: 'upload-image',
    templateUrl: '../templates/upload-image.component.html',
    styleUrls: ['../css/upload-image.component.css']
})

export class UploadImageComponent implements OnInit {
    image: Image;
    public imageForm = this.fb.group({
        contributor: [""],
        coverage: [""],
        created_at: [""],
        creator: [""],
        date: [""],
        description: [""],
        format: [""],
        hashedName: [""],
        id: [""],
        identifier: [""],
        language: [""],
        publisher: [""],
        relation: [""],
        rights: [""],
        source: [""],
        subject: [""],
        title: [""],
        type: [""],
        updated_at: [""],
        filename: [""]
    });

    constructor(private apiService: ApiService, private fb: FormBuilder) { }

    ngOnInit() { }

    onChangeFile(image) {
        var fr = new FileReader();

        fr.onload = function () {
            (<HTMLImageElement>document.getElementById("newImg")).src = fr.result;
            (<HTMLInputElement>document.getElementById("newImgName")).value = image.name;
        };

        fr.readAsDataURL(image);
    }
}