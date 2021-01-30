import {Item} from '../model/item';

export class Input {
  item!: Item;
  inputAmount!: number;

  constructor(item: Item, inputAmount: number) {
    this.item = item;
    this.inputAmount = inputAmount;
  }
}
