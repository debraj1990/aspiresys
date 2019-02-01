import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {

  count: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.cartService.getCartStream()
    //   .subscribe(n => {
    //     this.count = n;
    //   })
    this.count = this.cartService.getCount();
  }
  ngDoCheck() {
    this.count = this.cartService.getCount();
  }

}
