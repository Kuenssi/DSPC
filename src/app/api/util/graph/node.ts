export class Node {
  id!: string;
  label!: string;
  subLabel!: string;

  constructor(id: string, label: string, subLabel: string) {
    this.id = id;
    this.label = label;
    this.subLabel = subLabel;
  }
}
