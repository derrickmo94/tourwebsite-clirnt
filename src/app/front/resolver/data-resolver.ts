import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EMPTY, Observable, of } from "rxjs";
import { mergeMap, take, takeWhile } from "rxjs/operators";
import { ApiDataService } from "src/app/services/api/api-data.service";
import { Destination, Tour } from "../interfaces/data-model";

@Injectable({providedIn: 'root'})
export class DestinationsResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }
    
    resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any[]> {
        return this.api.getAllData('tour/destinations')
    }
}

@Injectable({providedIn: 'root'})
export class DestinationResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
        const slug = route.paramMap.get('destination_slug');
        return this.api.getData('tour/destinations',slug)
    }
}


@Injectable({providedIn: 'root'})
export class TourCategorysResolver implements Resolve<any> {
    constructor(private api: ApiDataService) {}
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any[]> {
        return this.api.getAllData('tour/categories')
    }
}

@Injectable({providedIn: 'root'})
export class TourCategoryResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any[]> {
        const slug = route.paramMap.get('category_slug')
        return this.api.getData('tour/categories',slug)
    }
}

@Injectable({providedIn: 'root'})
export class ToursResolver implements Resolve<any> {
    constructor(private api: ApiDataService) {}
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any[]> {
        return this.api.getAllData('tour/tours')
    }
}


@Injectable({providedIn: 'root'})
export class BlogArticleResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any>|Observable<never> {
            const slug = route.paramMap.get('article_slug')
        return this.api.getData('blog/articles', slug).pipe(
            take(1),
            mergeMap(article => {
                if (article) {
                    return of(article);
                } else {
                    return EMPTY;
                }
            })
        );
    }
}


@Injectable({providedIn: 'root'})
export class BlogCategorysResolver implements Resolve<any> {
    constructor(private api: ApiDataService) {}
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any[]> {
        return this.api.getAllData('blog/categories')
    }
}

@Injectable({providedIn: 'root'})
export class BlogCategoryResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any[]> {
        const slug = route.paramMap.get('blog_category_slug');
        return this.api.getData('blog/categories', slug)
            
    }
}

@Injectable({providedIn: 'root'})
export class BlogArticlesResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.api.getAllData('blog/articles')
    }
}



@Injectable({providedIn: 'root'})
export class AppSettingResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.api.getAllData('app/settings');
               
    }
}

@Injectable({providedIn: 'root'})
export class TourResolver implements Resolve<any> {
    constructor(private api: ApiDataService) { }
    
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Observable<never> {
        const slug = route.paramMap.get('tour_slug')  //paramMap.get('tour_slug')
        //console.log('PARAM '+tour_slug)
        return this.api.getData('tour/tours', slug).pipe(
            take(1),
            mergeMap(tour => {
                if (tour) {
                    return of(tour)
                } else {
                    return EMPTY;
                }
            })
        );
    }
}

//RESOLVER FOR SINGLE DATA ITEMS

