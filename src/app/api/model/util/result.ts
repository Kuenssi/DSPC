import {Item} from '../item';

export class Result {
  item!: Item;
  neededBuildingsDisplay!: number;
  neededBuildingsCalculation!: number;
  iteration!: number;
  generatedOutput!: number;
  nextItem!: Item;
}
