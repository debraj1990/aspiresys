import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
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

}
