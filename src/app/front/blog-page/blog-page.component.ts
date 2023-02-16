import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-blog-page',
	templateUrl: './blog-page.component.html',
	styleUrls: ['./blog-page.component.scss']
	})
export class BlogPageComponent implements OnInit {
	date: string = new Date().toDateString();
	blog_articles: any;
	blog_categories: any;
	app_settings: any;
	tours: any;
	
	constructor(private route:ActivatedRoute) { }

	ngOnInit(): void {
		this.app_settings = this.route.snapshot.data.app_settings[0];
		//this.blog_articles = this.route.snapshot.data.blog_articles;
		this.blog_categories = this.route.snapshot.data.blog_categories;
		this.tours = this.route.snapshot.data.tours;
		this.route.data.subscribe(data => {
			if (data.blog_articles) {
				this.blog_articles = data.blog_articles;
			} else {
				this.blog_articles = data.blog_article_category.blogarticlemodel_set
				console.log('article set '+ this.blog_articles)
			}
		});

	}

}