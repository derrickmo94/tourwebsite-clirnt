import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api/api-data.service';
import { SwiperOptions } from 'swiper';

@Component({
	selector: 'app-blog-article',
	templateUrl: './blog-article.component.html',
	styleUrls: ['./blog-article.component.scss']
	})
export class BlogArticleComponent implements OnInit {
	date: string = new Date().toDateString();
	article: any;
	articles: any;
	categories: any;

	constructor(private route:ActivatedRoute) { }

	ngOnInit(): void {
		this.route.data.subscribe(data => {
			this.article = data.blog_article;
			this.articles = data.blog_articles
			this.categories = data.blog_categories
			//console.log("SLUG NAME " + this.article.slug_name);
		});
	}

	public configf: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 1,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		navigation: {
		nextEl: '.next-article',
		prevEl: '.prev-article'
		},
		
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992:{
				slidesPerView: 2,
				spaceBetween: 30,
			}
		}
	};
	
	recentArticleData = [
		{
			id: 21,
			name: "image eleven"
		},
		{
			id: 22,
			name: "image eleven"
		},
		{
			id: 23,
			name: "image eleven"
		}
	];

}
