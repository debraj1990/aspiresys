import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input('value') product: any;

  currentTab: number = 1;

  reviews: Array<any> = [
    { stars: 5, author: 'who@mail.com', body: 'sample-review-1' },
    { stars: 3, author: 'who@mail.com', body: 'sample-review-2' }
  ]

  addNewReview(newReview) {
    this.reviews.push(newReview);
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  changeTab(newTabIndex) {
    this.currentTab = newTabIndex;
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }

  handleBuy(item) {
    this.cartService.addToCart(item);
  }


}
