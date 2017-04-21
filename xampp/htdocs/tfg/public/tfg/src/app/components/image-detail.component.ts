import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Image } from 'app/models/image';

@Component({
    selector: 'image-detail',
    templateUrl: '../templates/image-detail.component.html'
})

export class ImageDetailComponent implements OnInit {
    image: Image;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe((data: { image: Image }) => {
            this.image = data.image;
        });
    }
}