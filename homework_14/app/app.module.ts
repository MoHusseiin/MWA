import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent
    // ,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        // {path:'', component: HomeComponent},
        {path:'users', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)}
    ])  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
