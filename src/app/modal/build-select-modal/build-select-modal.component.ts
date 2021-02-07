import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AllRows} from '../../api/model/util/table/allRows';
import {Item} from '../../api/model/item';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AllComponents} from '../../api/model/components/allComponents';
import {AllBuildings} from '../../api/model/buildings/allBuildings';

@Component({
  selector: 'selectBuildModal',
  templateUrl: './build-select-modal.component.html',
  styleUrls: ['./build-select-modal.component.css']
})
export class BuildSelectModalComponent implements OnInit {
  @ViewChild('selectBuild') private selectBuild: any;

  @Output() selectCallback: EventEmitter<Item> = new EventEmitter<Item>();

  currentSelected!: Item;
  table!: AllRows;
  components!: boolean;

  constructor(private modalService: NgbModal) {
    this.components = false;
  }

  ngOnInit() {
    this.changeTable();
  }

  changeTable() {
    this.components = !this.components;

    if (this.components) {
      this.table = new AllComponents();
    } else {
      this.table = new AllBuildings();
    }
  }

  selectAndClose(item: Item, modal: any) {
    this.currentSelected = item;
    modal.close();
  }

  emitSelect() {
    this.selectCallback.emit(this.currentSelected);
  }

  // Modal stuff
  public open() {
    this.modalService.open(this.selectBuild, {size: 'xl', centered: true}).result.then((result) => {
      this.emitSelect();
    }, (reason) => {
    });
  }
}
