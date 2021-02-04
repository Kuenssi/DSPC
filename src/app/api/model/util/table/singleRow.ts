import {Item} from '../../item';

export class SingleRow {
  components!: Item[];
  categoryNumber!: number;

  constructor(components: Item[], cat: number) {
    this.components = components;
    this.categoryNumber = cat;
  }
}
