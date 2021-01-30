import {Input} from '../util/input';

export class Item {
  name!: string;
  processingTime!: number;
  neededMachine!: string;
  inputs: Input[];

  constructor() {
    this.inputs = [];
  }
}
