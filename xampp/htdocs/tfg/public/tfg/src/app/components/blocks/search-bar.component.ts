import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: '../../templates/blocks/search-bar.component.html',
  styleUrls: ['../../css/blocks/search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input("placeholder") _placeholder: string;
  private _query: string;
  private _router: Router;

  constructor(router: Router) {
    this._router = router;
  }

  ngOnInit() {
  }

  onSubmit() {
    let params = {
      queryParams: {
        q: encodeURI(this._query)
      }
    };
    
    this._router.navigate([ '/buscador' ], params);
    this._query = '';
  }

}