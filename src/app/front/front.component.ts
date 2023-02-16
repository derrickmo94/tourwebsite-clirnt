import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  mode = "over"
  d = new Date();
  year = this.d.getFullYear();
  app_settings: any;
  categories: any;
  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private _document: HTMLDocument) {
   
   }

  ngOnInit(): void {
    this.app_settings =this.route.snapshot.data.app_settings[0];
    this.categories = this.route.snapshot.data.tour_categories;

    this._document.getElementById('app-icon').setAttribute('href', this.app_settings.icon);
  }

}
