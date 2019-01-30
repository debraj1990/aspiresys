import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 198000,
      description: 'New Mac pro',
      imagePath: 'images/Laptop.png',
      canBuy: true
    },
    {
      id: 2,
      name: 'Mobile',
      price: 18000,
      description: 'New  pro',
      imagePath: 'images/Mobile.png',
      canBuy: true
    }
  ]


}
