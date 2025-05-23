import { Directive, ElementRef, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appAnimateLeft]'
})
export class AnimateLeftDirective {
  @HostBinding('style.transform') transform!: string;
  @HostBinding('class.shows') isVisible = false;

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit() {
    const route = this.router.url;

    // Define custom translateX per route
    let offset = 40; // default
    if (route.includes('home')) {
      offset = 70;
    } else if (route.includes('about')) {
      offset = 30;
    }

    // Apply initial offset
    this.transform = `translateX(${offset}px)`;

    // Observe for intersection
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.transform = 'translateX(0)';
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(this.el.nativeElement);
  }


  // @HostBinding('class.shows') isVisible = false;

  // constructor(private el: ElementRef) {}

  // ngOnInit() {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         this.isVisible = true;
  //         observer.unobserve(this.el.nativeElement); // animate once
  //       }
  //     });
  //   }, {
  //     threshold: 0.2
  //   });
  //   console.log('Directive initialized', this.el.nativeElement);
  //   observer.observe(this.el.nativeElement);
  // }
}
