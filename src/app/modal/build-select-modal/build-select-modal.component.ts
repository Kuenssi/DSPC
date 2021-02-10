import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AllRows} from '../../api/model/util/table/allRows';
import {Item} from '../../api/model/item';
import {ComponentsTable} from '../../api/model/components/componentsTable';
import {BuildingsTable} from '../../api/model/buildings/buildingsTable';
import {IMAGE_ENDING, IMAGE_LOCATION} from '../../api/model/util/constants/locations';

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
      this.table = ComponentsTable;
    } else {
      this.table = BuildingsTable;
    }
  }

  selectAndClose(item: Item) {
    this.currentSelected = item;
    this.emitSelect();
  }

  emitSelect() {
    this.selectCallback.emit(this.currentSelected);
  }

  buildImageSource(imageSource: string): string {
    return IMAGE_LOCATION + imageSource + IMAGE_ENDING;
  }
}
