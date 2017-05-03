import { Component, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'detail-field',
  templateUrl: '../../templates/blocks/detail-field.component.html',
  styleUrls: ['../../css/blocks/detail-field.component.css']
})
export class DetailFieldComponent {
  @Input() title: string;
  @Input() value: any;
  @Input() link: string; //Indica si el campo es un enlace y hacia dónde apunta
  @Input() edit: boolean;
  @Input() property: string;
  @Input() image: Image;
  @Input() date: boolean;

  constructor(){}
}