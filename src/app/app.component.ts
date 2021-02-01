import {Component} from '@angular/core';
import {Item} from './api/model/item';
import {AllBuildings} from './api/model/buildings/allBuildings';
import {AllComponents} from './api/model/components/allComponents';
import {ASSEMBLER, WATER} from './api/util/constants/names';
import {Input} from './api/util/input';
import {Result} from './api/util/result';
import {Tree} from './api/util/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dyson Sphere Program Calculator';
  version = '0.0.0';

  results: Result[];

  currentAssemblerMultiplier: number;
  wantedItem!: Item;
  wantedOutput: number;

  fasterMiningPercent: number;

  allBuildings = new AllBuildings();
  allComponents = new AllComponents();

  resultTree: Tree[];

  constructor() {
    this.currentAssemblerMultiplier = 0.75;
    this.wantedOutput = 60;
    this.fasterMiningPercent = 0;
    this.results = [];
    this.resultTree = [];
  }

  //////////
  // Ui Actions
  //////////
  selectItem(item: Item) {
    this.wantedItem = item;
    this.startCalc();
  }

  setOutput(e: any) {
    this.wantedOutput = Number(e.target.value);
    this.startCalc();
  }

  startCalc() {
    if (!this.wantedItem) return;

    this.results = [];
    this.calc(this.wantedItem, this.wantedOutput, 0);
    this.evaluateDisplayTree();
  }

  //////////
  // Logic
  //////////

  calc(wantedItem: Item, wantedOutput: number, iteration: number) {
    let currentOutput = this.calculateCurrentOutput(wantedItem);

    let result = new Result();
    result.item = wantedItem;
    result.iteration = iteration;

    let neededBuildings = wantedOutput / currentOutput;
    result.neededBuildingsCalculation = neededBuildings;
    result.neededBuildingsDisplay = neededBuildings;

    if (result.item.neededMachine === ASSEMBLER) {
      // needed for the correct number of assembler display
      result.neededBuildingsDisplay = wantedOutput / (currentOutput * this.currentAssemblerMultiplier);
    }

    this.results.push(result);

    for (let input of wantedItem.inputs) {
      let prevMatOutput = result.neededBuildingsCalculation * this.calculateNeededInput(wantedItem, input);

      this.calc(input.item, prevMatOutput, iteration + 1);
    }
  }

  calculateNeededInput(wantedItem: Item, neededItem: Input): number {
    let result;

    result = (60 / wantedItem.processingTime) * neededItem.inputAmount;

    return result;
  }

  calculateCurrentOutput(wantedItem: Item): number {
    let result;

    if (wantedItem.baseItem) {
      if (wantedItem.name === WATER) {
        result = 60;
      } else {
        result = 30 * (1 + (this.fasterMiningPercent / 100));
      }
    } else {
      result = (60 / wantedItem.processingTime) * wantedItem.outputAmount;
    }

    return result;
  }

  evaluateDisplayTree() {
    this.resultTree = [];

    let maxSteps = this.evaluateMaxSteps();

    for (let i = 0; i < maxSteps + 1; i++) {
      this.resultTree.push(new Tree(i));
    }

    for (let entry of this.results) {
      this.resultTree[entry.iteration].results.push(entry);
    }
  }

  evaluateMaxSteps(): number {
    let result = 1;

    for (let entry of this.results) {
      if (entry.iteration > result) {
        result = entry.iteration;
      }
    }

    return result;
  }
}
