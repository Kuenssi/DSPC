import {Result} from './result';

export class Tree {
  step!: number;
  results!: Result[];

  constructor(step: number) {
    this.step = step;
    this.results = [];
  }
}
