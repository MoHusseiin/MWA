import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';



@Component({
  selector: 'app-lazy-customer',
  template: `
    <div>
      <div *ngFor="let user of (users$ | async)">
          {{user.gender}} {{user.email}} <a [routerLink]="[user.login.uuid]">   Details</a>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LazyCustomerComponent implements OnInit {

  private users$;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.users$ = this.dataService.getCashedData();
  }

}
