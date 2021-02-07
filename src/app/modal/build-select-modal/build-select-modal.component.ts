import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AllRows} from '../../api/model/util/table/allRows';
import {Item} from '../../api/model/item';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AllComponents} from '../../api/model/components/allComponents';

@Component({
  selector: 'selectBuildModal',
  templateUrl: './build-select-modal.component.html',
  styleUrls: ['./build-select-modal.component.css']
})
export class BuildSelectModalComponent implements OnInit {
  @ViewChild('selectBuild') private selectBuild: any;

  @Output() selectCallback: EventEmitter<Item> = new EventEmitter<Item>();

  table!: AllRows;

  constructor(private modalService: NgbModal) {
    this.table = new AllComponents();
  }

  ngOnInit() {
  }

  emitSelect(item: Item) {
    this.selectCallback.emit(item);
  }

  // Modal stuff
  public open() {
    this.modalService.open(this.selectBuild, {size: 'lg', centered: true}).result.then((result) => {
    }, (reason) => {
    });
  }
}
