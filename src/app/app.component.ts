/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled2';
}
*/
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from './cart';
import {Product} from './Product';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="something()">something</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';
  cart: Cart;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('assets/products.json').subscribe(data => {
      console.log(data);
      let product: Product[] = data;
      this.cart = new Cart();
      this.cart.addItems(product);
    });
  }

  something(): void {
    console.log(this.cart);
    const product: Product = {
      name: 'Oatmeal',
      description: 'rjrjnr',
      price: 330.00,
      image: '../assets/images/oatmeal.jpg',
      limit: 20
    };
    this.cart.remove(product);
    console.log(this.cart);
  }
}


