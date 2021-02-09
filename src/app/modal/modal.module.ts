import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuildSelectModalComponent} from './build-select-modal/build-select-modal.component';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [
    BuildSelectModalComponent,
  ],
  declarations: [
    BuildSelectModalComponent,
  ],
})
export class ModalModule {
}
