import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path:'users', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),},
        {path: 'error', component: ErrorComponent}
    ])  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
