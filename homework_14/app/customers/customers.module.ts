import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCustomerComponent } from './lazy-customer.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';

@NgModule({
  declarations: [LazyCustomerComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LazyCustomerComponent,
        children:[
          {path:':uuid', component: UserDetailsComponent}
        ] 
      }
    
    ])
  ],
  providers: [],
  bootstrap: [LazyCustomerComponent]
})
export class CustomersModule { }
