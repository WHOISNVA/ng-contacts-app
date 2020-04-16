import { Directive, AfterViewInit, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[myColorPicker]'
})
export class ColorPickerDirective implements AfterViewInit, OnChanges {

  @Input() myColorPicker: string;

  constructor(private elRef: ElementRef) { 
  }

  ngAfterViewInit(): void {
    this.updateBackground();
 }

 ngOnChanges(changes: SimpleChanges) {
  this.updateBackground(); // I am not sure if myColorPicker contains the new value at this point. If not you need to read the new value from the changes object
 }

 updateBackground() {
    this.elRef.nativeElement.style.background = this.myColorPicker;
 }
}
