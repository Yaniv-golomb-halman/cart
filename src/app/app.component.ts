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
    <ul>
      <li *ngFor="let product of cart1.GetProducts();">
        <h1> {{product.name}}</h1>
        {{product.description}}
        <h1></h1>
        {{product.price + "$"}}
        {{product.image}}
      </li>
    </ul>
    <h1>{{a()}}</h1>
    <button (click)="something()">something</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';
  cart1: Cart;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('assets/products.json').subscribe(data => {
      console.log(data);
      let Items1: Item[] = data;
      this.cart1 = new Cart();
      this.cart1.addItems(Items1);
    });
  }

  a(): string {
    return this.cart1.GetTotalPrice().toString();
  }

  b(): string {
    this.cart1.update(this.cart1.GetProducts()[0], this.cart1.GetProducts()[1]);
    this.cart1 = this.cart1;
    return this.cart1.GetTotalPrice().toString() + 's';
  }

  something(): void {
    this.a = this.b;
  }
}


