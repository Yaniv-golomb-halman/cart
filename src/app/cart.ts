export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
  limit: number;
}


export class Cart {
  private products: Item[];
  private totalPrice: number;

  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }

  GetProducts(): Item[] {
    return this.products;
  }

  GetTotalPrice(): number {
    return this.totalPrice;
  }


  add(Item1: Item): void {
    this.products.push(Item1);
    this.totalPrice += Item1.price;
  }

  addItems(Items: Item []): void {
    for (let i = 0; i < Items.length; i++) {
      this.add(Items[i]);
    }
  }

  remove(Item1: Item): boolean {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i] === Item1) {
        this.products.splice(i, 1);
        this.totalPrice -= Item1.price;
        return true;
      }
    }
    return false;
  }

  update(oldItem: Item, newItem: Item): boolean {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i] === oldItem) {
        this.products[i] = newItem;
        this.totalPrice += newItem.price - oldItem.price;
        return true;
      }
    }
    return false;
  }

  checkout(): void {
    this.products = [];
    this.totalPrice = 0;
  }

}




