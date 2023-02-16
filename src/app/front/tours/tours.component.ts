import { Component, OnInit } from '@angular/core';

import { Parallax, SwiperOptions } from 'swiper';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
	selector: 'app-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
	currentRate = 3.5;
	date: string = new Date().toDateString();
	//rateConfig: NgbRatingConfig
	destinations: any;
	tour_categories: any;
	tours: any;
	blog_articles: any[]=[];
	app_settings: any;
	title_all: any = "";
	title_specific: any = ""
	title: any;


	constructor(rateConfig: NgbRatingConfig,private route:ActivatedRoute) { 		
		rateConfig.max = 5;
		rateConfig.readonly = true;
	}

	ngOnInit(): void {
		this.app_settings = this.route.snapshot.data.app_settings[0];
		this.destinations = this.route.snapshot.data.destinations;
		this.tour_categories = this.route.snapshot.data.tour_categories;
		this.tours = this.route.snapshot.data.tours;
		this.blog_articles = this.route.snapshot.data.blog_articles;
		this.route.data.subscribe(data => {
			if (data.tours) {
				this.tours = data.tours
				this.title = "Explore All Tours"
			} else if (data.tour_destination) {
				this.tours = data.tour_destination.tourmodel_set
			} else {
				this.tours = data.tour_category.tourmodel_set
				this.title  = "Explore "+data.tour_category.name
			}
		})		
	}


	public destinationConfig: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween:	10,
		speed:	2000,
		slidesPerView: 2,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		autoplay: {
			delay:	1,
			disableOnInteraction: false
		},
		threshold: 0,
		loop: true,
		pagination: false,
		freeMode: true,
		freeModeMomentum: true,
		freeModeMomentumRatio:	2,
		watchOverflow: true,
		grabCursor:	true,
		slidesOffsetBefore: 50,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 5,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 5,
			}
		}
	};

	searchToureForm = new FormGroup({
		keyWord: new  FormControl(''),
		activity: new FormControl,
		destination: new FormControl,
		duration: new FormControl(''),
		date: new FormControl('')

	});

}
