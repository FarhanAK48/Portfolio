import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAnimateRight]'
})
export class AnimateRightDirective {
  @HostBinding('class.show') isVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log('Directive initialized');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log('Intersection entry:', entry);
        if (entry.isIntersecting) {
          console.log('Element is visible');
          this.isVisible = true;
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.2 });
  
    observer.observe(this.el.nativeElement);
  }
}
