import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'profile-button',
  templateUrl: '../../templates/blocks/profile-button.component.html',
  styleUrls: ['../../css/blocks/profile-button.css']
})
export class ProfileButtonComponent implements OnInit {
  private _open: boolean;
  private _closeTimeout: any;
  readonly id: string = "profile";

  @Input("user") _user: User;

  constructor(private _router: Router, private _api: ApiService) {
    
  }

  smOnOpen()
  {
    this._open = true;
  }

  smOnClose()
  {
    this._open = false;
  }


  ngOnInit()
  {
    this._user = this._api.user;
    console.log(this._user);
  }

  logout()
  {
    this._api.logout();
  }

  onMouseEnterMenu(event)
  {
    if(this._closeTimeout) {
      clearTimeout(this._closeTimeout);
    }
  }

  onMouseLeaveMenu(event)
  {
    this._closeTimeout = setTimeout(() => {
      this._open = false;
    }, 400);
  }
}