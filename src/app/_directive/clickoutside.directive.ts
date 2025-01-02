
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickedOutsideDirective {
  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(targetElement: HTMLElement) {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.clickOutside.emit(); // Emit the event when click is outside
    }
  }

 
}