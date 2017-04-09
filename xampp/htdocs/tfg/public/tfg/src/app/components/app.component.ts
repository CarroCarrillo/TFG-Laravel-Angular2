import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/user';
import { Subscription }   from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent {
  user: User;
  userSubscription: Subscription;

  constructor(router: Router, private apiService: ApiService) {
    this.userSubscription = apiService.userChanged$.subscribe(value => {
      this.user = value;
    });

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
