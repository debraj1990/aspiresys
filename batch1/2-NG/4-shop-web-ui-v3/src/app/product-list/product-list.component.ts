import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


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


  constructor() { }

  ngOnInit() {
  }

}
