import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-root',
  template: `
  <app-dump [customers]="customers" isVisible="true" makeBigger="14" [ngStyle]="{'font-size': '14px'}"></app-dump>
  `,
  styles: []
})

export class AppComponent {
  private customers: Customer[];

  constructor(){
    this.customers = [new Customer("Mohamed", 25), new Customer("Hisham", 31), new Customer("Adriano", 28)];
  }
}
