import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../services/api.service';

@Component({
    selector: 'index',
    templateUrl: '../templates/index.component.html'
})

export class IndexComponent implements OnInit {
    constructor(/*private api: ApiService*/) { }

    ngOnInit() { 
        // this.api.getLastImages().then(res => {
        //     console.log(res);
        // });
    }
}