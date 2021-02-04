import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AllRows} from '../api/model/util/table/allRows';
import {Item} from '../api/model/item';

@Component({
  selector: 'app-selection-table',
  templateUrl: './selection-table.component.html',
  styleUrls: ['./selection-table.component.css']
})
export class SelectionTableComponent implements OnInit {
  @Input() table!: AllRows;

  @Output() selectCallback: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit() {
  }

  emitSelect(item: Item) {
    this.selectCallback.emit(item);
  }
}
