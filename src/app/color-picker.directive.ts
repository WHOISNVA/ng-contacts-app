import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[myColorPicker]'
})
export class ColorPickerDirective implements AfterViewInit {

  @Input() myColorPicker: string;

  constructor(private elRef: ElementRef) { 
  }

 ngAfterViewInit(): void {
 this.elRef.nativeElement.style.background = this.myColorPicker;
  }

}
