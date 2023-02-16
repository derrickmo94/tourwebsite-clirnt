import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	app_settings
 
	apiLoaded: Observable<boolean>;
	center: google.maps.LatLngLiteral;
	zoom=12;
	date: string = new Date().toDateString();
	mapOptions: google.maps.MapOptions = {
		mapTypeId: 'hybrid',
		disableDoubleClickZoom: true,
		maxZoom: 15,
		minZoom: 8,
		mapTypeControl: false,
		fullscreenControl: false,
	}

	constructor(httpClient: HttpClient,private route:ActivatedRoute) {
		this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBeeJTzryK7s-DaVABQGQwNVDaxN5oWn9o', 'callback')
			.pipe(
				map(() => true),
				catchError(() => of(false))
			);
	}

	ngOnInit(): void {
		this.app_settings = this.route.snapshot.data.app_settings[0];
	}
	
	callback():void{
			console.log("map inistialization")
		}

}