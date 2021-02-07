import {Component} from '@angular/core';
import {Item} from './api/model/item';
import {ASSEMBLER, MINING_MACHINE, RAW_OIL, WATER} from './api/model/util/constants/names';
import {Input} from './api/model/util/input';
import {Result} from './api/model/util/result';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dyson Sphere Program Calculator';
  version = '0.0.0';

  overviewMapBase: Map<string, number> = new Map<string, number>();
  overviewMapBaseKeys!: string[];

  overviewMapBuilding: Map<string, number> = new Map<string, number>();
  overviewMapBuildingKeys!: string[];

  results: Result[];

  currentAssemblerMultiplier: number;
  wantedItem!: Item;
  wantedOutput: number;

  fasterMiningPercent: number;

  constructor() {
    this.currentAssemblerMultiplier = 0.75;
    this.wantedOutput = 60;
    this.fasterMiningPercent = 0;
    this.results = [];
    this.overviewMapBaseKeys = [];
    this.overviewMapBuildingKeys = [];
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
    this.calc(this.wantedItem, this.wantedOutput, 0, new Item());
    this.evaluateAllOverviewElements();
  }

  //////////
  // Logic
  //////////
  evaluateAllOverviewElements() {
    //Clear old stuff
    this.overviewMapBase = new Map<string, number>();
    this.overviewMapBaseKeys = [];

    this.overviewMapBuilding = new Map<string, number>();
    this.overviewMapBuildingKeys = [];


    let key;
    //Get values to map
    for (let result of this.results) {
      if (result.item.baseItem && result.item.name !== WATER) {
        key = result.item.veinType;
        if (this.overviewMapBase.has(key)) {
          this.overviewMapBase.set(key, <number>this.overviewMapBase.get(key) + result.neededBuildingsDisplay);
        } else {
          this.overviewMapBase.set(key, result.neededBuildingsDisplay);
        }
      } else {
        key = result.item.neededMachine;
        if (this.overviewMapBuilding.has(key)) {
          this.overviewMapBuilding.set(key, <number>this.overviewMapBuilding.get(key) + result.neededBuildingsDisplay);
        } else {
          this.overviewMapBuilding.set(key, result.neededBuildingsDisplay);
        }
      }
    }

    let neededMiningMachines = 0;

    for (let overviewKey of this.overviewMapBase.keys()) {
      this.overviewMapBaseKeys.push(overviewKey);
      if (overviewKey.indexOf('Veins') > 0) {
        if (<number>this.overviewMapBase.get(overviewKey) <= 5) {
          neededMiningMachines += 1;
        } else {
          neededMiningMachines += <number>this.overviewMapBase.get(overviewKey) / 5;
        }
      }
    }

    this.overviewMapBuilding.set('~' + MINING_MACHINE, neededMiningMachines);

    for (let overviewKey of this.overviewMapBuilding.keys()) {
      this.overviewMapBuildingKeys.push(overviewKey);
    }
  }


  calc(wantedItem: Item, wantedOutput: number, iteration: number, nextItem: Item) {
    let currentOutput = this.calculateCurrentOutput(wantedItem);

    let result = new Result();
    result.item = wantedItem;
    result.iteration = iteration;

    let neededBuildings = wantedOutput / currentOutput;
    result.neededBuildingsCalculation = neededBuildings;
    result.neededBuildingsDisplay = neededBuildings;
    result.nextItem = nextItem;

    if (result.item.neededMachine === ASSEMBLER) {
      // needed for the correct number of assembler display
      result.neededBuildingsDisplay = wantedOutput / (currentOutput * this.currentAssemblerMultiplier);
    }

    result.generatedOutput = wantedOutput;

    this.results.push(result);

    for (let input of wantedItem.inputs) {
      let prevMatOutput = result.neededBuildingsCalculation * this.calculateNeededInput(wantedItem, input);

      this.calc(input.item, prevMatOutput, iteration + 1, wantedItem);
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
      if (wantedItem.name === WATER || wantedItem.name === RAW_OIL) {
        result = 60;
      } else {
        result = 30 * (1 + (this.fasterMiningPercent / 100));
      }
    } else {
      result = (60 / wantedItem.processingTime) * wantedItem.outputAmount;
    }

    return result;
  }

  setFixedStrings(number: number | undefined): string {
    if (number) {
      return number.toFixed(2);
    }
    return '';
  }
}
