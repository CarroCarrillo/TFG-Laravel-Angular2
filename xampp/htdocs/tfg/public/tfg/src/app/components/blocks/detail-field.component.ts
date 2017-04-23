import { Component, Input } from '@angular/core';

@Component({
  selector: 'detail-field',
  templateUrl: '../../templates/blocks/detail-field.component.html',
  styleUrls: ['../../css/blocks/detail-field.component.css']
})
export class DetailFieldComponent {
  @Input() title: string;
  @Input() value: any;
  @Input() link: string; //Indica si el campo es un enlace y hacia dónde apunta

  constructor(){}
}