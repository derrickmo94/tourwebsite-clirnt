import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontComponent } from './front.component';
import { IndexComponent } from './index/index.component';
import { TourComponent } from './tour/tour.component';
import { ToursComponent } from './tours/tours.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationComponent } from './destination/destination.component';
import { AppSettingResolver, DestinationsResolver, DestinationResolver,TourCategorysResolver,TourCategoryResolver,ToursResolver,TourResolver,BlogCategorysResolver,BlogCategoryResolver, BlogArticlesResolver,BlogArticleResolver} from './resolver/data-resolver';

const routes: Routes = [
	{
		path: '',
		component: FrontComponent,
		resolve: {
			app_settings: AppSettingResolver,
			tour_categories: TourCategorysResolver
		},
		children:[
			{
				path: '',
				component: IndexComponent,
				resolve: {
					app_settings: AppSettingResolver,
					destinations: DestinationsResolver,
					tour_categories: TourCategorysResolver,
					tours: ToursResolver,
					blog_articles: BlogArticlesResolver,
					blog_categories: BlogCategorysResolver,
				}
			},
			{
				path: 'tour/:tour_slug',
				component: TourComponent,
				resolve: {
					app_settings: AppSettingResolver,
					destinations: DestinationsResolver,
					tour_categories: TourCategorysResolver,
					tour: TourResolver,
					blog_articles: BlogArticlesResolver
				}
			},
			{
				path: 'tours',
				component: ToursComponent,
				resolve: {
					app_settings: AppSettingResolver,
					destinations: DestinationsResolver,
					tour_categories: TourCategorysResolver,
					//tour_category:TourCategorysResolver,
					tours: ToursResolver,
					blog_articles: BlogArticlesResolver
				}
			},
			{
				path: 'tours/categories/:category_slug',
				component: ToursComponent,
				resolve: {
					app_settings: AppSettingResolver,
					destinations: DestinationsResolver,
					tour_categories: TourCategorysResolver,
					tour_category:TourCategoryResolver,
					//tours: ToursResolver,
					blog_articles: BlogArticlesResolver
				}
			},
			{
				path: 'tours/destinations/:destination_slug',
				component: ToursComponent,
				resolve: {
					app_settings: AppSettingResolver,
					destinations: DestinationsResolver,
					tour_destination: DestinationResolver,
					tour_categories: TourCategorysResolver,
					//tour_category:TourCategoryResolver,
					//tours: ToursResolver,
					blog_articles: BlogArticlesResolver
				}
			},
			{
				path: 'destinations',
				component: DestinationComponent,
				resolve: {
					destinations: DestinationsResolver
				},
			},
			{
				path: 'blog/articles',
				component: BlogPageComponent,
				resolve: {
					app_settings: AppSettingResolver,
					blog_articles: BlogArticlesResolver,
					blog_categories: BlogCategorysResolver,
					tours: ToursResolver,
				}
			},
			
			{
				path: 'blog/articles/:article_slug',
				component: BlogArticleComponent,
				resolve: {
					app_settings: AppSettingResolver,
					blog_article: BlogArticleResolver,
					blog_articles: BlogArticlesResolver,
					blog_categories: BlogCategorysResolver,
				}
			},
			{
				path: 'blog/articles/categories/:blog_category_slug',
				component: BlogPageComponent,
				resolve: {
					app_settings: AppSettingResolver,
					//blog_articles: BlogArticlesResolver,
					blog_categories: BlogCategorysResolver,
					blog_article_category: BlogCategoryResolver,
					tours: ToursResolver,
				}
			},
			{
				path: 'about',
				component: AboutComponent,
				resolve: {
					app_settings: AppSettingResolver,
				}
			},
			{
				path: 'contact',
				component: ContactComponent,
				resolve: {
					app_settings: AppSettingResolver,
				}
			}
		] 
	},		
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
