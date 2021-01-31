import {Component} from '@angular/core';
import {Item} from './api/model/item';
import {AllBuildings} from './api/model/buildings/allBuildings';
import {AllComponents} from './api/model/components/allComponents';
import {ASSEMBLER} from './api/util/constants/names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dyson Sphere Program Calculator';
  version = '0.0.1';

  results: Result[];
  displayList: Result[];

  currentAssemblerMultiplier: number;
  wantedItem!: Item;
  wantedOutput: number;

  fasterMiningPercent: number;

  allBuildings = new AllBuildings();
  allComponents = new AllComponents();

  constructor() {
    this.currentAssemblerMultiplier = 0.75;
    this.wantedOutput = 60;
    this.fasterMiningPercent = 0;
    this.results = [];
    this.displayList = [];
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
    this.calc(this.wantedItem, this.wantedOutput, this.currentAssemblerMultiplier, 0);
    this.evaluateDisplayList();
  }

  //////////
  // Logic
  //////////

  calc(wantedItem: Item, wantedOutput: number, currentMultiplier: number, iteration: number) {
    let currentOutput = this.calculateCurrentOutput(wantedItem, currentMultiplier);

    let result = new Result();
    result.item = wantedItem;
    result.neededBuildings = wantedOutput / currentOutput;
    result.iteration = iteration;

    this.results.push(result);

    for (let input of wantedItem.inputs) {
      let prevMatOutput = result.neededBuildings * input.inputAmount * 60;

      this.calc(input.item, prevMatOutput, currentMultiplier, iteration + 1);
    }
  }

  calculateCurrentOutput(wantedItem: Item, currentMultiplier: number): number {
    let result;

    if (wantedItem.baseItem) {
      result = 30 * (1 + (this.fasterMiningPercent / 100));
    } else {
      result = (60 / wantedItem.processingTime) * wantedItem.outputAmount;
    }

    if (wantedItem.neededMachine === ASSEMBLER) {
      result *= currentMultiplier;
    }

    return result;
  }

  evaluateDisplayList() {
    // merge every single shit and so on
    this.displayList = this.results;
    console.log(this.results);
  }
}

export class Result {
  item!: Item;
  neededBuildings!: number;
  iteration!: number;
}
