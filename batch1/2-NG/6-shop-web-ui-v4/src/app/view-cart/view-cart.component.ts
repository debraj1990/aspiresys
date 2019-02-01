import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  cart: Array<any> = []

  constructor(private cartService: CartService) { }

  ngOnInit() {

  }
  ngDoCheck() {
    this.cart = this.cartService.getCart();
  }

}
