import {Component, HostListener} from '@angular/core';
import {Item} from './api/model/item';
import {AllBuildings} from './api/model/buildings/allBuildings';
import {AllComponents} from './api/model/components/allComponents';
import {ASSEMBLER, RAW_OIL, WATER} from './api/util/constants/names';
import {Input} from './api/util/input';
import {Result} from './api/util/result';
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

  overviewMapBase: Map<string, number> = new Map<string, number>();
  overviewMapBaseKeys!: string[];

  overviewMapBuilding: Map<string, number> = new Map<string, number>();
  overviewMapBuildingKeys!: string[];

  results: Result[];

  currentAssemblerMultiplier: number;
  wantedItem!: Item;
  wantedOutput: number;

  fasterMiningPercent: number;

  allBuildings = new AllBuildings();
  allComponents = new AllComponents();

  nodes: Node[];
  links: Link[];

  scrolled: boolean;

  constructor() {
    this.currentAssemblerMultiplier = 0.75;
    this.wantedOutput = 60;
    this.fasterMiningPercent = 0;
    this.results = [];
    this.nodes = [];
    this.links = [];
    this.overviewMapBaseKeys = [];
    this.overviewMapBuildingKeys = [];
    this.scrolled = false;
  }

  //////////
  // To top button
  //////////

  //https://stackoverflow.com/questions/41363175/go-to-top-of-page-on-button-click-in-angular-2
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    this.scrolled = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
          this.overviewMapBase = this.overviewMapBase.set(key, result.neededBuildingsDisplay);
        }
      } else {
        key = result.item.neededMachine;
        if (this.overviewMapBuilding.has(key)) {
          this.overviewMapBuilding.set(key, <number>this.overviewMapBuilding.get(key) + result.neededBuildingsDisplay);
        } else {
          this.overviewMapBuilding = this.overviewMapBuilding.set(key, result.neededBuildingsDisplay);
        }
      }
    }

    for (let overviewKey of this.overviewMapBase.keys()) {
      this.overviewMapBaseKeys.push(overviewKey);
    }

    for (let overviewKey of this.overviewMapBuilding.keys()) {
      this.overviewMapBuildingKeys.push(overviewKey);
    }
  }

  builtResultGraph() {
    this.nodes = [];
    this.links = [];
    let allLinks: Link[] = [];

    let nodeMap: Map<string, Node> = new Map<string, Node>();

    //create all nodes
    let alreadyAdded = false;
    for (let result of this.results) {
      let nodeMapKeys: string[] = [];

      for (let key of nodeMap.keys()) {
        nodeMapKeys.push(key);
      }

      if (nodeMapKeys.indexOf(result.item.name) > 0) {
        let currentNode = <Node>nodeMap.get(result.item.name);
        let neededBuildings = currentNode.neededBuilding + result.neededBuildingsDisplay;

        if (result.item.baseItem) {
          nodeMap.set(result.item.name, new Node(currentNode.id, currentNode.label, neededBuildings.toFixed(2) + 'x ' + result.item.veinType, neededBuildings))
        } else {
          nodeMap.set(result.item.name, new Node(currentNode.id, currentNode.label, neededBuildings.toFixed(2) + 'x ' + result.item.neededMachine, neededBuildings))
        }
      } else {
        if (result.item.baseItem) {
          nodeMap.set(result.item.name, new Node(result.item.name, result.item.name, result.neededBuildingsDisplay.toFixed(2) + 'x ' + result.item.veinType, result.neededBuildingsDisplay));
        } else {
          nodeMap.set(result.item.name, new Node(result.item.name, result.item.name, result.neededBuildingsDisplay.toFixed(2) + 'x ' + result.item.neededMachine, result.neededBuildingsDisplay));
        }
      }
    }

    // fill nodesList
    for (let key of nodeMap.keys()) {
      let newNode = <Node>nodeMap.get(key);
      this.nodes.push(newNode);
    }

    // create all links
    for (let i = 0; i < this.results.length; i++) {
      let result = this.results[i];
      if (result.nextItem.name) {
        allLinks.push(new Link('l' + i, result.item.name, result.nextItem.name, result.generatedOutput.toString()));
      }
    }

    // Combine links between the same nodes
    let linkMap: Map<string, Link> = new Map<string, Link>();

    for (let link of allLinks) {
      alreadyAdded = false;
      for (let key of linkMap.keys()) {
        if (link.source === (<Link>linkMap.get(key)).source && link.target === (<Link>linkMap.get(key)).target) {
          let newOutput: number = Number(link.label) + Number((<Link>linkMap.get(key)).label);
          linkMap.set(key, new Link(link.id, link.source, link.target, newOutput.toString()));
          alreadyAdded = true;
        }
      }

      if (!alreadyAdded) {
        linkMap.set(link.id, link);
      }
    }

    for (let key of linkMap.keys()) {
      this.links.push(<Link>linkMap.get(key));
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
