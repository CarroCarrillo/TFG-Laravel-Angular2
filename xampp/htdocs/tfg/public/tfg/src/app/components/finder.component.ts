import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../services/api.service';
import { Hit } from '../models/hit';

@Component({
  selector: 'app-finder',
  templateUrl: '../templates/finder.component.html',
  styleUrls: ['../css/finder.component.css'],
  animations: [
        trigger('openPanel', [
            state('inactive', style({
                height: '0'
            })),
            state('active', style({
                height: '365px'
            })),
            transition('inactive => active', animate('1000ms ease-in')),
            transition('active => inactive', animate('1000ms ease-out'))
        ]),
        trigger('openPanelSmall', [
            state('inactive', style({
                height: '0'
            })),
            state('active', style({
                height: '100px'
            })),
            transition('inactive => active', animate('500ms ease-in')),
            transition('active => inactive', animate('500ms ease-out'))
        ]),
    ]
})
export class FinderComponent implements OnInit {
  private _query: string;
  private _end: boolean;
  private _scroll: string;
  private _hits: Hit[] = [];
  private _imagesState: string;
  private _usersState: string;
  private _fields: Array<string>;
  private _types: Array<string>;

  private _activatedRoute: ActivatedRoute;
  private _api: ApiService;

  constructor(activatedRoute: ActivatedRoute, api: ApiService) {
    this._activatedRoute = activatedRoute;
    this._api = api;
    this._imagesState = "active";
    this._usersState = "active";
   }

  ngOnInit() {
      this._fields = ["title", "subject", "description", "source", "language", "relation", "coverage", "creator", "contributor", "publisher", "rights", "date", "type", "format", "identifier", "name", "surname", "username", "email"];
      this._types = ["images", "users"];
      
      this._activatedRoute.queryParams.subscribe((queryParams: Params) => {
        this._end = false;
        this._hits = [];
        this._query = decodeURI(queryParams['q']);
        if(queryParams['q']) {
          this._api.find({ q: queryParams['q'] }).then(result => {
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
      });
  }

  toggleImages()
  {
    this._imagesState = this._imagesState == "active" ? "inactive" : "active";
    this.toggle(this._types, 'images');
  }

  toggleUsers()
  {
    this._usersState = this._usersState == "active" ? "inactive" : "active";
    this.toggle(this._types, 'users');
  }

  private toggle(array, value) {
      var index = array.indexOf(value);

      if (index === -1) {
          array.push(value);
      } else {
          array.splice(index, 1);
      }

      this.onFilterChange();
  }

  onFilterChange()
  {
    if(this._fields.length < 19){

      if(this._query) {
        this._end = false;
        this._hits = [];
        this._api.find({ q: this._query, fields: this._fields, index: this._types.join() }).then(result => {
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
    else{
      this._end = false;
        this._hits = [];
        this._api.find({ q: this._query, index: this._types.join() }).then(result => {
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