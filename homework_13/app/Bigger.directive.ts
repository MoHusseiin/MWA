import { Directive, Renderer2, ElementRef, HostBinding, HostListener, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[makeBigger]'
})
export class BiggerDirective implements OnInit{

    @Input('makeBigger') defaultSize: number;

    private elementRef: ElementRef;
    private renderer2: Renderer2;
    private myFontSize:number;

    constructor(e: ElementRef, r: Renderer2) {
        this.elementRef = e;
        this.renderer2 = r;
    }

    @HostListener('dblclick') onDblClick(){
        this.myFontSize = +this.myFontSize + 2;
        console.log("myFontSize => "+this.myFontSize);
        this.renderer2.setStyle(this.elementRef.nativeElement, "font-size", this.myFontSize+"px");
    }

    ngOnInit(): void {
        this.myFontSize = this.defaultSize;
    }
}