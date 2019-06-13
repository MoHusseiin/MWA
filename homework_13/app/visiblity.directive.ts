import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class VisiblityDirective implements OnInit{
  
  @Input('isVisible') visible: string

  private elementRef: ElementRef;
  private renderer2: Renderer2;

  constructor(e: ElementRef, r: Renderer2) {
    this.visible = "true";
    this.elementRef = e;
    this.renderer2 = r;
  }

  ngOnInit(): void {
    if(this.visible === "true")
      this.renderer2.setStyle(this.elementRef.nativeElement, "visibility", "visible");
    else
      this.renderer2.setStyle(this.elementRef.nativeElement, "visibility", "hidden");
      
  }
}
