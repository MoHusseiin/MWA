import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DumpComponent } from './dump.component';
import { VisiblityDirective } from './visiblity.directive';
import { BiggerDirective } from './Bigger.directive';
import { MultiPipePipe } from './multi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DumpComponent,
    VisiblityDirective,
    BiggerDirective,
    MultiPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
