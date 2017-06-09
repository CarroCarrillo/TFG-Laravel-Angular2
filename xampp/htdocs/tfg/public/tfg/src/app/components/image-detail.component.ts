import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Image } from 'app/models/image';

@Component({
    selector: 'image-detail',
    templateUrl: '../templates/image-detail.component.html',
    styleUrls:['../css/image-detail.component.css']
})

export class ImageDetailComponent implements OnInit {
    image: Image;
    auxImage: Image;
    subjects: string[];
    edition: boolean;

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        this.route.data.subscribe((data: { image: Image }) => {
            this.image = data.image;
            if(this.image.subject) this.subjects = this.image.subject.split('/');
        });

        this.edition = false;
    }

    startEdition(){
        this.auxImage = new Image();
        this.auxImage.fromData(this.image);
        this.edition = true;
    }

    cancelEdition(){
        this.image = new Image();
        this.image.fromData(this.auxImage);
        this.edition = false;
    }

    saveEdition(){
        this.edition = false;
        this.subjects = this.image.subject.split('/');
        this.api.updateImage(this.image).then(img => {
            
        });
    }
}