import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {cart} from './cart';
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
  cart: cart;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('assets/products.json').subscribe((data: Product[]) => {
      this.cart.addItems(data);
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


