import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api/api-data.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  destinations: any;
  count: any;
  next: any;
  previous: any;

  constructor(private api: ApiDataService, private route:ActivatedRoute) { }

	ngOnInit(): void {
    this.destinations = this.route.snapshot.data.destinations;
    this.count = this.route.snapshot.data.destinations.count;
    this.next = this.route.snapshot.data.destinations.next;
    this.previous = this.route.snapshot.data.destinations.previous;
  }

  getNext() {
    this.api.getAllData(this.next);
    
  }

  getPrevious() {
    this.api.getAllData(this.previous);
  }

}
