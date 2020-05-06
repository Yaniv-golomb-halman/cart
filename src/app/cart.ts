import {Product} from './product';

export class Cart {
  private totalPrice: number;
  public NameToAmount: Record<string, number>;

  constructor() {
    this.totalPrice = 0;
    this.NameToAmount = {};
  }

  addItems(products: Product []): void {
    for (let i = 0; i < products.length; i++) {
      this.add(products[i]);
    }
  }

  add(product: Product): void  {
    this.totalPrice += product.price;
    this.NameToAmount[product.name] = 1;
  }

  remove(product: Product): void  {
    if (this.NameToAmount[product.name] !== undefined) {
      this.totalPrice -= product.price * this.NameToAmount[product.name];
      delete this.NameToAmount[product.name];
    }
  }

  update(product: Product, ToWhat: number): void  {
    if (ToWhat > product.limit) {
      return;
    }
    if (this.NameToAmount[product.name] !== undefined) {
      this.totalPrice += product.price * (ToWhat - this.NameToAmount[product.name]);
      this.NameToAmount[product.name] = ToWhat;
    }
  }

  checkout(): number {
    this.totalPrice = 0;
    this.NameToAmount = {};
    return this.totalPrice;
  }

}




