import {Component} from '@angular/core';
import {Item} from './api/model/item';
import {AllBuildings} from './api/model/buildings/allBuildings';
import {AllComponents} from './api/model/components/allComponents';
import {ASSEMBLER, RAW_OIL, WATER} from './api/util/constants/names';
import {Input} from './api/util/input';
import {Result} from './api/util/result';
import {Tree} from './api/util/tree';
import {Node} from './api/util/graph/Node';
import {Link} from './api/util/graph/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dyson Sphere Program Calculator';
  version = '0.0.0';

  overviewMap: Map<string, number> = new Map<string, number>();

  results: Result[];

  currentAssemblerMultiplier: number;
  wantedItem!: Item;
  wantedOutput: number;

  fasterMiningPercent: number;

  allBuildings = new AllBuildings();
  allComponents = new AllComponents();

  nodes: Node[];
  links: Link[];

  overviewMapKeys!: string[];

  constructor() {
    this.currentAssemblerMultiplier = 0.75;
    this.wantedOutput = 60;
    this.fasterMiningPercent = 0;
    this.results = [];
    this.nodes = [];
    this.links = [];
    this.overviewMapKeys = [];
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
    this.builtResultGraph();
  }

  //////////
  // Logic
  //////////
  evaluateAllOverviewElements() {
    //Clear old stuff
    this.overviewMap = new Map<string, number>();
    this.overviewMapKeys = [];

    let key;
    //Get values to map
    for (let result of this.results) {
      if (result.item.baseItem) {
        key = result.item.veinType;
      } else {
        key = result.item.neededMachine;
      }

      if (this.overviewMap.has(key)) {
        // @ts-ignore -> ignores the probability of undefined by this.overviewMap.get
        this.overviewMap.set(key, this.overviewMap.get(key) + result.neededBuildingsDisplay);
      } else {
        this.overviewMap = this.overviewMap.set(key, result.neededBuildingsDisplay);
      }
    }

    for (let overviewKey of this.overviewMap.keys()) {
      this.overviewMapKeys.push(overviewKey);
    }
  }

  builtResultGraph() {
    this.nodes = [];
    this.links = [];

    let alreadyAdded = false;
    for (let result of this.results) {
      alreadyAdded = false;
      for (let node of this.nodes) {
        if (result.item.name === node.id) {
          alreadyAdded = true;
        }
      }

      if (!alreadyAdded) {
        if (result.item.baseItem) {
          this.nodes.push(new Node(result.item.name, result.item.name, result.neededBuildingsDisplay.toFixed(2) + 'x ' + result.item.veinType));
        } else {
          this.nodes.push(new Node(result.item.name, result.item.name, result.neededBuildingsDisplay.toFixed(2) + 'x ' + result.item.neededMachine));
        }
      }
    }

    for (let i = 0; i < this.results.length; i++) {
      let result = this.results[i];
      if (result.nextItem.name) {
        this.links.push(new Link('l' + i, result.item.name, result.nextItem.name, result.generatedOutput + '/min'));
      }
    }

    this.nodes = [...this.nodes];
    this.links = [...this.links];
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
