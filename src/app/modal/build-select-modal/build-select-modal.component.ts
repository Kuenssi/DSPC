import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AllRows} from '../../api/model/util/table/allRows';
import {Item} from '../../api/model/item';
import {AllComponents} from '../../api/model/components/allComponents';
import {AllBuildings} from '../../api/model/buildings/allBuildings';

@Component({
  selector: 'selectBuildModal',
  templateUrl: './build-select-modal.component.html',
  styleUrls: ['./build-select-modal.component.css']
})
export class BuildSelectModalComponent implements OnInit {
  @Output() selectCallback: EventEmitter<Item> = new EventEmitter<Item>();

  currentSelected!: Item;
  table!: AllRows;
  components!: boolean;

  constructor() {
  }

  ngOnInit() {
    this.changeTable(true);
  }

  changeTable(input: boolean) {
    this.components = input;

    if (this.components) {
      this.table = new AllComponents();
    } else {
      this.table = new AllBuildings();
    }
  }

  selectAndClose(item: Item) {
    this.currentSelected = item;
    this.emitSelect();
  }

  emitSelect() {
    this.selectCallback.emit(this.currentSelected);
  }
}
