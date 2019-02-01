import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Array<any> = [];

  cartStream: Subject<any> = new Subject(); // observable stream

  constructor() { }

  addToCart(item) {
    this.cart.push(item);
    this.cartStream.next(this.cart.length)
  }

  getCartStream() {
    return this.cartStream;
  }
  getCart() {
    return this.cart;
  }
  getCount() {
    return this.cart.length;
  }

}
