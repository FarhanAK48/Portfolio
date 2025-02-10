
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickedOutside]'
})
export class ClickedOutsideDirective {
  // @Output() clickOutside = new EventEmitter<MouseEvent>();

  // constructor(private elementRef: ElementRef) {}

  // @HostListener('document:click', ['$event'])
  // onClick(targetElement: HTMLElement) {
  //   const isClickedInside = this.elementRef.nativeElement.contains(targetElement);
  //   if (!isClickedInside) {
  //     this.clickOutside.emit(); // Emit the event when click is outside
  //   }
  // }
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const targetElement = event.target as Node;

    // Check if event.target is a valid Node before calling contains()
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit(); // Emit event when clicking outside
    }
  }
 
}