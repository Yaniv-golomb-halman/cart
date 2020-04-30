import {isBooleanLiteralLike} from 'codelyzer/util/utils';

export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
  limit?: number;
}

export class Cart {
  private products: Item[];
  private  Amount: number[];
  private totalPrice: number;

  constructor() {
    this.products = [];
    this.Amount = [];
    this.totalPrice = 0;
  }

  GetProducts(): Item[] {
    return this.products;
  }

  GetAmount(): number [] {
    return this.Amount;
  }

  GetTotalPrice(): number {
    return this.totalPrice;
  }

  addItems(Items: Item []): void {
    for (let i = 0; i < Items.length; i++) {
      this.add(Items[i]);
    }
  }

  WhereExist(Item1: Item): number | false {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i] === Item1) {
        return i;
      }
    }
    return false;
  }

  add(Item1: Item): boolean {
    const WhereItem1Exist: false | number = this.WhereExist(Item1);
    if (WhereItem1Exist === false) {
      this.products.push(Item1);
      this.Amount.push(1);
      this.totalPrice += Item1.price;
      return true;
    }
    if (Item1.limit === this.Amount[WhereItem1Exist]) {
      return false;
    }
    this.Amount[WhereItem1Exist]++;
  }

  remove(Item1: Item): boolean {
    const WhereItem1Exist: false | number = this.WhereExist(Item1);
    if (WhereItem1Exist === false) {
      return false;
    }
    this.Amount[WhereItem1Exist]--;
    if (this.Amount[WhereItem1Exist] === 0) {
      this.products.splice(WhereItem1Exist, 1);
      this.Amount.splice(WhereItem1Exist, 1);
    }
    this.totalPrice -= Item1.price;
  }

  update(Item1: Item, ByHowMuch: number): boolean {
    const WhereItem1Exist: false | number = this.WhereExist(Item1);
    if (WhereItem1Exist === false) {
      return false;
    }
    let newAmoAmount: number = this.Amount[WhereItem1Exist] + ByHowMuch;
    if (newAmoAmount <= 0) {
      this.totalPrice -= Item1.price * this.Amount[WhereItem1Exist];
      this.products.splice(WhereItem1Exist, 1);
      this.Amount.splice(WhereItem1Exist, 1);
      return;
    }
    if (newAmoAmount >= Item1.limit) {
      newAmoAmount = Item1.limit;
    }
    this.Amount[WhereItem1Exist] = newAmoAmount;
    this.totalPrice += Item1.price * ByHowMuch;
  }

  checkout(): number {
    this.products = [];
    this.totalPrice = 0;
    return this.totalPrice;
  }

}




