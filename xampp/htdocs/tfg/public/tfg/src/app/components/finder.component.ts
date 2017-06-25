import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../services/api.service';
import { Hit } from '../models/hit';


@Component({
  selector: 'app-finder',
  templateUrl: '../templates/finder.component.html',
  styleUrls: ['../css/finder.component.css']
})
export class FinderComponent implements OnInit {
  private _query: string;
  private _end: boolean;
  private _scroll: string;
  private _hits: Hit[] = [];
  private _allContents: boolean;
  private _allLibraries: boolean;
  private _searchTypes: Object;

  private _activatedRoute: ActivatedRoute;
  private _api: ApiService;
  
  private _nodeTypesSubs: Subscription;
  private _contentTypesSubs: Subscription;

  constructor(activatedRoute: ActivatedRoute, api: ApiService) {
    this._activatedRoute = activatedRoute;
    this._api = api;
   }

  ngOnInit() {
    this._allLibraries = false;
    this._allContents = false;
    this._searchTypes = {};

    this._activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this._end = false;
      this._hits = [];
      this._query = decodeURI(queryParams['q']);
      if(queryParams['q']) {
        this._api.find({ q: queryParams['q'] }).then(result => {
          if(result) {
            if(result.hits.hits.length > 0) {
              this._hits = this._hits.concat(result.hits.hits as Hit[]);
              console.log(this._hits);
              this._scroll = result._scroll_id;
            } else {
              this._scroll = null;
              this._end = true;
            }
          }
        });
      }
    });
  }

//   onFilterChange()
//   {
//     this.checkAll();
//     let params = { q: encodeURI(this._query) };
//     if((!this._allLibraries && !this._allContents) || this._allLibraries != this._allContents){
//       let selectedTypes = [];
//       Object.getOwnPropertyNames(this._searchTypes).forEach((val) => {
//         if(this._searchTypes[val])
//           selectedTypes.push(val);
//       });

//       params["type"] = selectedTypes.join();
//     }

//     this._end = false;
//     this._hits = [];
//     this._api.find(params).then(result => {
//       if(result) {
//         if(result.hits.hits.length > 0) {
//           this._hits = this._hits.concat(result.hits.hits as Hit[]);
//           this._scroll = result._scroll_id;
//         } else {
//           this._scroll = null;
//           this._end = true;
//         }
//       }
//     });
//   }

  onScroll(event)
  {
    let target = event.target;
    if(target.scrollTop + 1 >= target.scrollHeight - target.clientHeight) {

      if(this._scroll) {
        this._api.find({ scroll_id: this._scroll }).then(result => {
          if(result) {
            if(result.hits.hits.length > 0) {
              this._hits = this._hits.concat(result.hits.hits as Hit[]);
              this._scroll = result._scroll_id;
            } else {
              this._scroll = null;
              this._end = true;
            }
          }
        });
      }
    }
  }

//   checkBoxesHandler (group: string) {
//     if(group == 'nodes') {
//       this._nodeTypes.forEach(type => {
//         if(this._allLibraries) this._searchTypes[type.slug] = true;
//         else this._searchTypes[type.slug] = false;
//       });
//     }
//     else if(group == 'contents') {
//       this._contentTypes.forEach(type => {
//         if(this._allContents) this._searchTypes[type.slug] = true;
//         else this._searchTypes[type.slug] = false;
//       });
//     }

//     this.onFilterChange();
//   }

//   private checkAll(){
//     this._allLibraries = true;
//     this._allContents = true;

//     this._nodeTypes.forEach(type => {
//       if(!this._searchTypes[type.slug]) this._allLibraries = false;
//     });
    
//     this._contentTypes.forEach(type => {
//       if(!this._searchTypes[type.slug]) this._allContents = false;
//     });
//   }
}