import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter [parentValue]="" (componentCounterValue)="getCount1($event)"></app-counter>
    {{result1}}
    <br/>
    <br/>

    <app-counter [parentValue]="-10" (componentCounterValue)="getCount2($event)"></app-counter>
    {{result2}}
    <br/>
    <br/>

    <app-counter [parentValue]="null" (componentCounterValue)="getCount3($event)"></app-counter>
    {{result3}}
    <br/>
    <br/>

    <app-counter [parentValue]="10" (componentCounterValue)="getCount4($event)"></app-counter>
    {{result4}}
  `,
  styles: [``]
})
export class AppComponent {

  private result1: string;
  private result2: string;
  private result3: string;
  private result4: string;

  getCount1(e: string){
    this.result1 =  `Component1 Counter Value = ${e}`;
  }

  getCount2(e: string){
    this.result2 =  `Component2 Counter Value = ${e}`;
  }

  getCount3(e: string){
    this.result3 =  `Component3 Counter Value = ${e}`;
  }

  getCount4(e: string){
    this.result4 =  `Component4 Counter Value = ${e}`;
  }
}