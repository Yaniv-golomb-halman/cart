import {Product} from './product';

export class cart {
  private totalPrice: number;
  public NameToAmount: Record<string, number>;

  constructor() {
    this.totalPrice = 0;
    this.NameToAmount = {};
  }

  addItems(products: Product []) {
    products.forEach(product => this.add(product));
  }

  add(product: Product) {
    this.totalPrice += product.price;
    this.NameToAmount[product.name] = 1;
  }

  remove(product: Product) {
    if (!this.NameToAmount[product.name]) {
      this.totalPrice -= product.price * this.NameToAmount[product.name];
      delete this.NameToAmount[product.name];
    }
  }

  update(product: Product, amount: number) {
    if (amount > product.limit) {
      return;
    }
    if (!this.NameToAmount[product.name]) {
      this.totalPrice += product.price * (amount - this.NameToAmount[product.name]);
      this.NameToAmount[product.name] = amount;
    }
  }

  checkout() {
    this.totalPrice = 0;
    this.NameToAmount = {};
  }

}




