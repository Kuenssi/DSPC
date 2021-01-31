import {Component} from '@angular/core';
import {Item} from './api/model/item';
import {ASSEMBLER_MK_1_MULTI, ASSEMBLER_MK_2_MULTI, ASSEMBLER_MK_3_MULTI, BASE_MINING} from './api/util/numbers';
import {ElectricMotor} from './api/model/components/cat3/electricMotor';
import {AllBuildings} from './api/model/buildings/allBuildings';
import {AllComponents} from './api/model/components/allComponents';

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

  currentMultiplier: number;
  wantedItem: Item;
  wantedOutput: number;

  mark1: boolean;
  mark2: boolean;
  mark3: boolean;

  fasterMiningPercent: number;

  allBuildings = new AllBuildings();
  allComponents = new AllComponents();

  constructor() {
    this.wantedItem = new ElectricMotor();
    this.mark1 = true;
    this.mark2 = false;
    this.mark3 = false;
    this.currentMultiplier = ASSEMBLER_MK_1_MULTI;
    this.wantedOutput = 60;
    this.fasterMiningPercent = 0;
    this.results = [];
    this.displayList = [];
  }

  //////////
  // Ui Actions
  //////////
  toggleAction(value: boolean): boolean {
    this.mark1 = false;
    this.mark2 = false;
    this.mark3 = false;

    return value;
  }

  selectItem(item: Item) {
    this.wantedItem = item;
  }

  setOutput(e: any) {
    this.wantedOutput = Number(e.target.value);
  }

  startCalc() {
    this.results = [];
    this.evaluateAssemblerLevel();
    this.calc(this.wantedItem, this.wantedOutput, this.currentMultiplier);
    this.evaluateDisplayList();
  }

  //////////
  // Logic
  //////////

  calc(wantedItem: Item, wantedOutput: number, currentMultiplier: number) {
    if (wantedItem.baseItem) {
      let currentOutput = BASE_MINING * (1 + (this.fasterMiningPercent / 100));
      console.log(currentOutput);

      let result = new Result();
      result.item = wantedItem;
      result.neededBuildings = wantedOutput / currentOutput;

      this.results.push(result);

      return;
    }

    let currentOutput = (60 / wantedItem.processingTime) * wantedItem.outputAmount;
    currentOutput = (currentOutput * currentMultiplier);

    let result = new Result();
    result.item = wantedItem;
    result.neededBuildings = wantedOutput / currentOutput;

    this.results.push(result);

    for (let input of wantedItem.inputs) {
      let prevMatOutput = result.neededBuildings * input.inputAmount * 60;

      this.calc(input.item, prevMatOutput, currentMultiplier);
    }
  }

  evaluateDisplayList() {
    // merge every single shit and so on
    this.displayList = this.results;
  }

  private evaluateAssemblerLevel() {
    if (this.mark1) {
      this.currentMultiplier = ASSEMBLER_MK_1_MULTI;
    }

    if (this.mark2) {
      this.currentMultiplier = ASSEMBLER_MK_2_MULTI;
    }

    if (this.mark3) {
      this.currentMultiplier = ASSEMBLER_MK_3_MULTI;
    }
  }
}

export class Result {
  item!: Item;
  neededBuildings!: number;
}
