export class Node {
  id!: string;
  label!: string;
  subLabel!: string;
  neededBuilding!: number;

  constructor(id: string, label: string, subLabel: string, neededBuilding: number) {
    this.id = id;
    this.label = label;
    this.subLabel = subLabel;
    this.neededBuilding = neededBuilding;
  }
}
