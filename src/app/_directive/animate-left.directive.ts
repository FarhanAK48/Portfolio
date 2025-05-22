import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAnimateLeft]'
})
export class AnimateLeftDirective {
  @HostBinding('class.shows') isVisible = false;

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
