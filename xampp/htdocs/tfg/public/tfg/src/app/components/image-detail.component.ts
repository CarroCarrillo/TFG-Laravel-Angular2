import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Image } from 'app/models/image';

@Component({
    selector: 'image-detail',
    templateUrl: '../templates/image-detail.component.html',
    styleUrls:['../css/image-detail.component.css']
})

export class ImageDetailComponent implements OnInit {
    image: Image;
    subjects: string[];
    
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe((data: { image: Image }) => {
            this.image = data.image;
            this.subjects = this.image.subject.split('/');
        });
    }
}