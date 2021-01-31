import {Input} from '../util/input';

export class Item {
  name!: string;
  processingTime!: number;
  neededMachine!: string;
  inputs: Input[];
  outputAmount!: number;
  baseItem!: boolean;
  veinType!: string;

  constructor() {
    this.inputs = [];
  }
}
