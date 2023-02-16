import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parallax, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	app_settings: any;
	date: Date;
	year: any;

	constructor(private route:ActivatedRoute) { }

	ngOnInit(): void {
		this.app_settings = this.route.snapshot.data.app_settings[0];

	}

	public aboutConfig: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween:	10,
		speed:	2000,
		slidesPerView: 1,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		autoplay: {
			delay:	3000,
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
		centeredSlides: true,
		navigation: {
			nextEl: '.next-1',
			prevEl: '.prev-1'
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 5,
				slidesOffsetBefore: 10,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesOffsetBefore: 10,
			}
		}
	}


  	aboutData1= [
		{
		id: 1,
		name: "image one"
		},
		{
		id: 2,
		name: "image two"
		},
		{
		id: 3,
		name: "image three"
		},
		{
		id: 4,
		name: "image five"
		},
		{
		id: 5,
		name: "image six"
		},
		{
		id: 6,
		name: "image seven"
		},
		{
		id: 7,
		name: "image eight"
		},
		{
		id: 8,
		name: "image nine"
		},
		{
		id: 9,
		name: "image ten"
		},
		{
		id: 10,
		name: "image eleven"
		}
	];

	profileData = [
		{
			id:	1,
			name: "admin one",
			title: "chief executive officer"
		},
		{
			id:	2,
			name: "admin two",
			title: "chief executive officer"
		},
		{
			id:	3,
			name: "admin three",
			title: "chief executive officer"
		}
	]

}

