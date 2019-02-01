import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input('value') review: any;

  stars: Array<Number> = [];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.stars = [];
    for (let n = 0; n < this.review.stars; n++) {
      this.stars.push(n);
    }
  }

}
