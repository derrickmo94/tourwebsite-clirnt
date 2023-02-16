import { Component, OnInit } from '@angular/core';
//import { Parallax, SwiperOptions } from 'swiper';
import { Swiper,SwiperOptions } from 'swiper/bundle';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { DomSanitizer } from '@angular/platform-browser';

import { faMapMarkerAlt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiDataService } from 'src/app/services/api/api-data.service'
import { Tour,Destination,BlogArticle,TourCategory } from 'src/app/front/interfaces/data-model'
import { stringify } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
	mapMaker = faMapMarkerAlt;
	faClock = faClock;
	currentRate = 3.5;
	date: string = new Date().toDateString();
	options: FormGroup;
	week_sale: any;
	destinations: any;
	tour_categories: any;
	tours: any[];
	blog_articles: any;
	blog_categories: any;
	settings: any;


	constructor(rateConfig: NgbRatingConfig,private route: ActivatedRoute) {
		rateConfig.max = 5;
		rateConfig.readonly = true;
	}

	ngOnInit(): void {
		this.route.data.subscribe(data => {
			this.destinations = data.destinations;
			this.tour_categories = data.tour_categories;
			this.tours = data.tours;
			this.blog_articles = data.blog_articles;
			this.settings = data.app_settings[0];
			this.blog_categories = data.blog_categories;
			this.week_sale = this.getMax();
		});
		/* for (let i = 0; i<= 1; i++){
			this.blog_articles[i] = this.route.snapshot.data.blog_articles[i];
			console.log("Articles "+this.blog_articles);
		} */
	}

	getMax() {
		//this.max_tour_discount = Math.max(...this.tours.discount)
		let discounts = [];
		let max_discount;
		let sales_tour;
		for (let t of this.tours) {
			if (t.discount !== null) {
				discounts.push(t.discount)			
			}
		}
		max_discount = Math.max(...discounts)

		for (let tx of this.tours) {
			if (tx.discount !== null) {
				if (tx.discount == max_discount) {
					sales_tour = tx
				} else {
					sales_tour = null
				}
			}
		}
		console.log("DISCOUNTS " + JSON.stringify(discounts));
		console.log("MAXIMUM " + max_discount);
		console.log("MAXIMUM " + JSON.stringify(sales_tour));
		return sales_tour;		
	}
	
	
	//main slider
	public config1: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		slidesPerView: 1,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		navigation: {
		  nextEl: '.next-1',
		  prevEl: '.prev-1'
		},
		autoplay: {
		  disableOnInteraction: false
		},
		loop: true,
		pagination: false,
	  };
	//swiper two
	public config2: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		slidesPerView: 3,
		spaceBetween: 2,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		autoplay: false,
		navigation: {
			nextEl: '.swiper-two-next-nav',
			prevEl: '.swiper-two-prev-nav'
		},
		breakpoints: {
			576: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 5,
			},
			1024: {
				slidesPerView: 8,
				spaceBetween: 5,
			}
		}
	};

	//popular tours
	public config3: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween: 10,
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 1,
		loop: true,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		navigation: {
			nextEl: '.next-3',
			prevEl: '.prev-3'
		},
		autoplay: false,
		breakpoints: {
			576: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesOffsetAfter: 70,
				slidesOffsetBefore: 80,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesOffsetAfter: 70,
				slidesOffsetBefore: 80,
			}
		}
	};

	//popular destinations
	public config4: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 1,
		spaceBetween: 10,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		loop: true,
		navigation: {
			nextEl: '.next-4',
			prevEl: '.prev-4'
		},
		autoplay: {
			disableOnInteraction: true
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
				// slidesOffsetAfter:  30,
				slidesOffsetBefore: 70,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
				//slidesOffsetAfter:  40,
				slidesOffsetBefore: 70,
			}
		}
	};

	//Top destinations
	public config5: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween: 10,
		slidesOffsetAfter: 0,
		slidesOffsetBefore: 0,
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 2,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		autoplay: {
			disableOnInteraction: true
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 10,
			},
			1024: {
				slidesPerView: 6,
				spaceBetween: 10,
			}
		}
	};

	public config6: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		slidesPerView: 2,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		autoplay: {
			disableOnInteraction: true
		},
		loop: true,
		pagination: false,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 10,
			}
		}
	};

	//@ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
	//@ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

	//this.componentRef.directiveRef.setIndex(0);

	tourMandate = [
		{
			id: 20,
			mandate: "any route",
			description: "We will help you to make any route for travel",
		},
		{
			id: 30,
			mandate: "your dream",
			description: "Your dreams of an unforgettable journey can come true with us"
		},
		{
			id: 40,
			name: "image eleven",
			mandate: "our guarantee",
			description: "We guarantee you an unforgettable journey and a lot of impressions"
		}
	];

	searchToureForm = new FormGroup({
		keyWord: new FormControl(''),
		activity: new FormControl,
		destination: new FormControl,
		duration: new FormControl(''),
		date: new FormControl('')

	});

	







	
}
