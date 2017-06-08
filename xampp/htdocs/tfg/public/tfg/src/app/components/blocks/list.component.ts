import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
    selector: 'list',
    templateUrl: '../../templates/blocks/list.component.html',
    styleUrls: ['../../css/blocks/list.component.css']
})

export class ListComponent implements OnInit {

    @Input() images: Image[];

    constructor() { }

    ngOnInit() { }

}