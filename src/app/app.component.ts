import {Component} from '@angular/core';
import {Item} from './api/model/item';
import {ASSEMBLER_MK_1_MULTI, ASSEMBLER_MK_2_MULTI, ASSEMBLER_MK_3_MULTI} from './api/util/numbers';
import {ElectricMotor} from './api/model/components/cat3/electricMotor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dyson Sphere Program Calculator';
  version = '0.0.1';

  results: Result[];

  currentMultiplier: number;
  wantedItem: Item;
  wantedOutput: number;

  mark1: boolean;
  mark2: boolean;
  mark3: boolean;

  constructor() {
    this.wantedItem = new ElectricMotor();
    this.mark1 = true;
    this.mark2 = false;
    this.mark3 = false;
    this.currentMultiplier = ASSEMBLER_MK_1_MULTI;
    this.wantedOutput = 60;
    this.results = [];
  }

  //////////
  // UiActions
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
  }

  //////////
  // Logic
  //////////
  calc(wantedItem: Item, wantedOutput: number, currentMultiplier: number) {
    if (!wantedItem.processingTime) return;

    let currentOutput = (60 / wantedItem.processingTime) * wantedItem.outputAmount;
    currentOutput = currentOutput * currentMultiplier;

    let result = new Result();
    result.item = wantedItem;
    result.neededBuildings = wantedOutput / currentOutput;

    this.results.push(result)
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
