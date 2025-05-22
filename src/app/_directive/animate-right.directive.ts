import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAnimateRight]'
})
export class AnimateRightDirective {
  @HostBinding('class.show') isVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.el.nativeElement); // animate once
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(this.el.nativeElement);
  }
}
