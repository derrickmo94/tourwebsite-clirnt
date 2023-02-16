import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, retry, delay } from 'rxjs/operators';
import { Destination } from 'src/app/front/interfaces/data-model';

@Injectable({
	providedIn: 'root'
})
export class ApiDataService {
	API_URL = "http://localhost:8000/apiv1/";

	headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
	httpOptions = {
		headers: this.headers
	};

	constructor(private http: HttpClient) {
		//console.log(this.apiUrl)
	}

	private handleError(error: HttpErrorResponse) {
		let errorMessage = 'Unknown error!';
		if (error.error instanceof ErrorEvent) {
			errorMessage = `Error: ${error.error.message}`;
		} else {
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}

		window.alert(errorMessage);
		return throwError(errorMessage)
	}

	getAllData(apiEndpoint: string): Observable<any> {
		const url = `${this.API_URL}${apiEndpoint}`;
		return this.http.get<any>(url, this.httpOptions)
			.pipe(
				retry(3),
				catchError(this.handleError)
			);
	}

	getData(apiEndpoint: string, slug: any): Observable<any> {
		//const id = typeof query === 'number'? query:query.id;
		console.log(`api serviice Id ${slug}`);
		const url = `${this.API_URL}${apiEndpoint}/${slug}`;
		return this.http.get<any>(url, this.httpOptions)
			.pipe(
				retry(3),
				catchError(this.handleError)
			);
	}

	updateData(apiEndpoint: string, id: number, data: any) {
		//const id = typeof query === 'number'?query:query.id;
		const url = `${this.API_URL}${apiEndpoint}${id}/`;
		return this.http.put(url, data, this.httpOptions);
	}

	deleteData(apiEndpoint: string, id: any | number): Observable<any> {
		//const id = typeof query === 'number'?query:query.id;
		//this.destinations = this.destinations.filter(c => c !== destination);
		const url = `${this.API_URL}${apiEndpoint}${id}/`;
		console.log('service: Id to be deleted ' + id)
		return this.http.delete(url, this.httpOptions);
		/*.pipe(
			tap(_ => console.log(`deleted data ${id}`)),
			catchError(this.handleError)
		)*/
	}

	createData(apiEndpoint: String, data: any) {
		const url = `${this.API_URL}${apiEndpoint}`;
		console.log(`Generated Service API ${url}`);
		//let jdata = JSON.stringify(data,null);
		return this.http.post(url, data, this.httpOptions);
	}

}
