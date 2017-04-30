import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Token } from '../models/token';
import { User } from '../models/user';
import { Image } from '../models/image';

declare var localStorage: any;
declare var sessionStorage: any;

@Injectable()
export class ApiService {
    basepath = 'http://tfg.dev:8080/api/';
    version = 'v1';
    token: Token;
    user: User;

    private headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    public authHeader: string;
    public loggedin = false;
    private loggedinSource = new Subject<boolean>();
    private userSource = new Subject<User>();
    private errorSource = new Subject<Error>();

    loggedInChanged$ = this.loggedinSource.asObservable();
    userChanged$ = this.userSource.asObservable();
    errorHandled$ = this.errorSource.asObservable();

    // Almacena la URL para que podamos redigir hacia ella al iniciar sesión
    redirectUrl: string;

    constructor(private http: Http) {
        if (sessionStorage.getItem("token") !== null) {
            this.setToken(JSON.parse(sessionStorage.getItem("token")));
        }
        if (sessionStorage.getItem("user") !== null) {
            this.changeLoggedIn(true);
            this.changeUser(JSON.parse(sessionStorage.getItem("user")));
        }
    }

    private setToken(token: Token) {
        this.token = token;
        sessionStorage.setItem('token', JSON.stringify(token));
        this.authHeader = this.token.token_type + ' ' + this.token.access_token;
        this.headers.append('Authorization', this.authHeader);
        this.getMe().then(result => {
            this.changeLoggedIn(true);
            this.changeUser(result);
        });
    }

    logout() {
        sessionStorage.removeItem('token');
        this.authHeader = null;
        this.token = null;
        this.changeLoggedIn(false);
        this.changeUser(null);
        this.headers.delete('Authorization');
    }

    private errorHandler(error: Error) {
        this.errorSource.next(error);
        console.log(error);
    }

    changeLoggedIn(value): void {
        this.loggedin = value;
        this.loggedinSource.next(this.loggedin);
    }

    changeUser(value): void {
        this.user = value;
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.userSource.next(this.user);
    }

    url(path): string {
        return this.basepath + this.version + '/' + path;
    }

    private handleError(error: Error) {
        console.log(error);
    }

    private apiCall(method, path, params?): Promise<any> {

        if (method == 'GET' && params != undefined) {
            var keys = Object.keys(params);
            var values = (<any>Object).values(params);
            path += '?';

            for (var i = 0; i < keys.length; i++) {
                if (i != 0) {
                    path += '&';
                }
                if (values[i] instanceof Array) {
                    for (var j = 0; j < values[i].length; j++) {
                        if (j != 0) {
                            path += '&';
                        }
                        path += keys[i] + '[]=' + values[i][j];
                    }
                } else {
                    path += keys[i] + '=' + values[i];
                }
            }
            params = {};
        }

        return this.http.request(this.url(path), {
            method: method,
            body: params,
            headers: this.headers
        })
            .toPromise();//.catch(error => this.errorHandler(error as Error));
    }

    getToken(username: string, password: string): Promise<any> {
        return this.apiCall('POST', 'token', {
            username: username,
            password: password
        }).then(res => {
            let token = res.json() as Token;
            this.setToken(token);
            return token;
        });
    }

    getMe(): Promise<User> {
        return this.apiCall('GET', 'me')
            .then(res => {
                return res.json() as User;
            }).catch(error => {
                this.token = null;
                sessionStorage.removeItem('token');
                this.headers.delete('Authorization');
            });
    }

    createUser(user, password_confirmation): Promise<User> {
        return this.apiCall('POST', 'user', {
            name: user.name,
            surname: user.surname,
            username: user.username,
            email: user.email,
            profile_image: user.profile_image,
            password: user.password,
            password_confirmation: password_confirmation,
        });
    }

    getLastImages(): Promise<Image[]> {
        return this.apiCall('GET', 'image')
            .then(res => {
                return res.json() as Image[];
            }).catch(error => {
                this.handleError(error);
            });
    }

    getImage(id: number): Promise<Image> {
        return this.apiCall('GET', 'image/' + id)
            .then(res => {
                return res.json() as Image;
            }).catch(error => {
                this.handleError(error);
            });
    }

    createImage(image: Image): Promise<Image> {
        return this.apiCall('POST', 'image', image)
        .then(res => {
            return res.json() as Image;
        }).catch(error => {
            this.handleError(error);
        });
    }

    uploadFile(formData): Promise<string> {
        let headers = new Headers({
            'Authorization': this.token.token_type + ' ' + this.token.access_token
        });

        let self = this;
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("POST", self.url('file'));
            request.setRequestHeader('Authorization', self.token.token_type + ' ' + self.token.access_token);
            request.send(formData);
            request.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        
                        resolve(this.responseText);
                    } else {
                        reject(JSON.parse(this.responseText) as Error);
                    }
                }
            };
        });
    }

    updateImage(img: Image): Promise<Image>{
        return this.apiCall('UPDATE', 'image', img)
        .then(res => {
            return res.json() as Image;
        }).catch(error => {
            this.handleError(error);
        });
    }
}