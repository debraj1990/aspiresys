import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  @Input() cart;

  constructor() { }

  ngOnInit() {
  }

}
