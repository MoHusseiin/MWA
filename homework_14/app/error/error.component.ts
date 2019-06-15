import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      error Id NotFound
    </p>
  `,
  styles:[]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
