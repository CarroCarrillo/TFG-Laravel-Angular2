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
    page: number;

    constructor(private api: ApiService) { 
        this.page = 0
    }

    ngOnInit() {
        this.api.getLastImages({ page: this.page }).then(res => {
            if (res) {
                this.lastImages = res;
            }
        });
    }

    onScroll(event)
    {
        let target = event.target;
        if(target.scrollTop + 1 >= target.scrollHeight - target.clientHeight) {
            this.page++;
            this.api.getLastImages({ page: this.page }).then(res => {
                if (res) {
                    this.lastImages = this.lastImages.concat(res);
                }
            });
        }
    }
}