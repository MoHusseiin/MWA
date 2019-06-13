import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-dump',
  template: `
  <p>customers:</p>
      <ul>
        <li *ngFor="let customer of smarts">
          {{ customer | multiPipe }}
        </li>
      </ul>
  `,
  styles: []
})
export class DumpComponent implements OnInit {
  private smarts: Customer[];
  @Input() customers: Customer[];
  
  constructor() { 
    this.smarts = this.customers;
  }

  ngOnInit() {
    this.smarts = this.customers;
  }

}
