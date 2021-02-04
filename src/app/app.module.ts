import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToTopButtonComponent } from './to-top-button/to-top-button.component';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { ResultGraphComponent } from './result-graph/result-graph.component';
import {ToTopButtonModule} from './to-top-button/to-top-button.module';
import {SelectionTableModule} from './selection-table/selection-table.module';
import {ResultGraphModule} from './result-graph/result-graph.module';

@NgModule({
  declarations: [
    AppComponent,
    ToTopButtonComponent,
    SelectionTableComponent,
    ResultGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    ToTopButtonModule,
    SelectionTableModule,
    ResultGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
