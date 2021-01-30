import {Component} from '@angular/core';
import {Item} from './api/model/item';
import {ASSEMBLER_MK_1_MULTI, ASSEMBLER_MK_2_MULTI, ASSEMBLER_MK_3_MULTI} from './api/util/numbers';
import {ConveyorBeltOne} from './api/model/buildings/cat2/conveyorBeltOne';
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

  currentMultiplier = ASSEMBLER_MK_1_MULTI;
  wantedItem: Item;
  wantedOutput = 60;

  mark1 = true;
  mark2 = false;
  mark3 = false;

  constructor() {
    this.wantedItem = new ElectricMotor();
    this.results = [];
  }

  //////////
  // UiActions
  //////////
  toggleAction(value: boolean): boolean {
    this.mark1 = false;
    this.mark2 = false;
    this.mark3 = false;

    this.evaluateAssemblerLevel();

    return value;
  }

  selectItem(item: Item) {
    this.wantedItem = item;
  }

  setOutput(e: any) {
    this.wantedOutput = Number(e.target.value);
  }

  startCalc() {
    this.calc(this.wantedItem, this.wantedOutput);
  }

  //////////
  // Logic
  //////////
  calc(wantedItem: Item, wantedOutput: number) {
    if (!this.wantedItem.processingTime) return;

    let currentOutput = (60 / this.wantedItem.processingTime) * this.wantedItem.outputAmount;
    currentOutput = currentOutput * this.currentMultiplier;

    let result = new Result();
    result.item = this.wantedItem;
    result.neededBuildings = this.wantedOutput / currentOutput;


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
