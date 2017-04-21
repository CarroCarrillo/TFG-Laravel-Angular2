import { Injectable } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Image } from '../../models/image';

@Injectable()
export class ImageResolver implements Resolve<Image> {
    constructor(private apiService: ApiService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Image> {
        let id = route.params['id'];
        return this.apiService.getImage(id).then(content => {
            if (content) {
                return content;
            } else {
                this.router.navigate(['/404']);
            }
        });
    }
}