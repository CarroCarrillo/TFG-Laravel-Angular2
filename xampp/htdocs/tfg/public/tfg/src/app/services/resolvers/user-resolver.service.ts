import { Injectable } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { User } from '../../models/user';

@Injectable()
export class UserResolver implements Resolve<User> {
    constructor(private apiService: ApiService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User> {
        let id = route.params['id'];
        return this.apiService.getUser(id).then(user => {
            if (user) {
                return user;
            } else {
                this.router.navigate(['/404']);
            }
        });
    }
}