import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Result} from '../api/model/util/result';
import {Link} from '../api/model/util/graph/link';
import {Node} from '../api/model/util/graph/node';

@Component({
  selector: 'app-result-graph',
  templateUrl: './result-graph.component.html',
  styleUrls: ['./result-graph.component.css']
})
export class ResultGraphComponent implements OnInit, OnChanges {
  @Input() results!: Result[];

  nodes: Node[];
  links: Link[];

  constructor() {
    this.nodes = [];
    this.links = [];
  }

  ngOnInit() {
    if (this.results.length > 0) {
      this.builtResultGraph();
    }
  }

  ngOnChanges() {
    this.builtResultGraph();
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
}
