import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <button (click) = decrease()>-</button>
      {{_countValue}}
      <button (click) = increase()>+</button>
      <br/>
  `,
  styles: [``]
})
export class CounterComponent implements OnInit {
  
  private _countValue: number;
  @Input() parentValue: number;
  @Output() componentCounterValue: EventEmitter<number>;

  constructor() { 
    this._countValue = 0;
    this.componentCounterValue = new EventEmitter();
  }
 
  ngOnInit() {
    if(this.parentValue)
      this._countValue = this.parentValue;
    else
      this._countValue = 0;
    this.componentCounterValue.emit(this._countValue);
  }

  increase(){
    this._countValue++;
    this.componentCounterValue.emit(this._countValue);
    return false;
  }

  decrease(){
    this._countValue--;
    this.componentCounterValue.emit(this._countValue);
    return false;
  }

  get CountValue(){
      return this._countValue;
  }

  set CountValue(countValue: number){
    this._countValue = countValue;
  }
}
