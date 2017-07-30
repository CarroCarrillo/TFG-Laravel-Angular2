import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Image } from 'app/models/image';
import { User } from 'app/models/user';
import * as FileSaver from 'file-saver';

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
    user: User;

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { 
        this.user = this.api.user;
    }

    ngOnInit() {
        this.route.data.subscribe((data: { image: Image }) => {
            this.image = data.image;
            if(this.image.subject) this.subjects = this.image.subject.split('/');
            else this.subjects = new Array<string>();
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
        this.image.subject = this.subjects.join('/');
        if(this.image.date) this.image.date = new Date(this.image.date);
        else delete this.image.date;

        this.api.updateImage(this.image).then(img => {
            
        });
    }

    downloadDC(){
        this.api.downloadDC(this.image.id).then(dc => {
            let blob = new Blob([dc._body], {type: 'application/xml'});
            FileSaver.saveAs(blob, this.image.title + ".xml");
        });
    }

    downloadRDF(){
        this.api.downloadRDF(this.image.id).then(rdf => {
            let blob = new Blob([rdf._body], {type: 'application/rdf'});
            FileSaver.saveAs(blob, this.image.title + ".rdf");
        });
    }
}