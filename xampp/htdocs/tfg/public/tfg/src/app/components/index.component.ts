import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Image } from '../models/image';

@Component({
    selector: 'index',
    templateUrl: '../templates/index.component.html',
    styleUrls: ['../css/index.component.css']
})

export class IndexComponent implements OnInit {
    lastImages: Image[];

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.getLastImages().then(res => {
            if (res) {
                this.lastImages = res;
            }
        });
    }
}