export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
  limit?: number;
}

export class Cart {
  private totalPrice: number;
  public NameToAmount: Record<string, number>;

  constructor() {
    this.totalPrice = 0;
    this.NameToAmount = {};
  }

  addItems(Items: Item []): void {
    for (let i = 0; i < Items.length; i++) {
      this.add(Items[i]);
    }
  }

  add(item: Item) {
    this.totalPrice += item.price;
    this.NameToAmount[item.name] = 1;
  }

  remove(item: Item) {
    if (item.name in this.NameToAmount) {
      delete this.NameToAmount[item.name];
    }
  }

  update(item: Item, ToWhat: number) {
    if (ToWhat > item.limit) {
      return;
    }
    if (item.name in this.NameToAmount) {
      this.totalPrice += item.price * (ToWhat - this.NameToAmount[item.name]);
      this.NameToAmount[item.name] = ToWhat;
    }
  }

  checkout(): number {
    this.totalPrice = 0;
    this.NameToAmount = {};
    return this.totalPrice;
  }

}




