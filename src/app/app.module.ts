import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToTopButtonComponent} from './to-top-button/to-top-button.component';
import {ResultGraphComponent} from './result-graph/result-graph.component';
import {ToTopButtonModule} from './to-top-button/to-top-button.module';
import {ResultGraphModule} from './result-graph/result-graph.module';
import {ModalModule} from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    ToTopButtonComponent,
    ResultGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    ToTopButtonModule,
    ResultGraphModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
