import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isCartOpen: boolean = false;

  cart: Array<any> = [];

  addToCart(item) {
    this.cart.push(item);
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

 
}
