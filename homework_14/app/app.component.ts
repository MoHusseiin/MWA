import { Component, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['users']">Users</a>
    <router-outlet></router-outlet>
  `,
  styles: ['']  
})
export class AppComponent implements OnDestroy{
  private users$: Observable<Object>;
  private subs:Subscription;

  constructor(private dataService: DataService){
    this.users$ = this.dataService.getOnlineData();
    this.subs = this.users$.subscribe(data => localStorage.setItem("users", JSON.stringify(data)));
  }   
  
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
