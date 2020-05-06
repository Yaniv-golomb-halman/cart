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
import {Cart, Item} from './cart';

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
      let Items1: Item[] = data;
      this.cart = new Cart();
      this.cart.addItems(Items1);
    });
  }

  something(): void {
    const item: Item = {
      name: 'Oatmeal',
      description: 'rjrjnr;r',
      price: 330.00,
      image: '../assets/images/oatmeal.jpg',
      limit: 20
    };
    this.cart.remove(item);
    console.log(this.cart);
  }
}


