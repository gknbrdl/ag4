import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AccountService {

	private loggedIn = false;
	constructor( @Inject('apiUrl') private apiUrl, private http: Http) { }

	login(userName, password): Observable<boolean> {
		let url: string = this.apiUrl + "/account/login";
		let headers = new Headers();
		headers.append("Authorization", btoa(userName + ":" + password));

		var requestOptions = new RequestOptions({ headers: headers });

		return this.http.post(url, JSON.stringify({ userName, password }), requestOptions)
			.map(res => res.json())
			.map(res => {
				if (res) {
					localStorage.setItem("isLogged", res);
					this.loggedIn = true;
				}

				return res;
			})

	}


	logout() {
		localStorage.removeItem("isLogged");
		this.loggedIn = false;
	}

	isLoggedIn() {
		return this.loggedIn;
	}

}
