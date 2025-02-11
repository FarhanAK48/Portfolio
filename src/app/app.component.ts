import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  // isDarkMode:any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Check saved theme preference
    // this.isDarkMode = localStorage.getItem('theme') === 'dark';
    // if (this.isDarkMode) {
    //   this.renderer.addClass(document.documentElement, 'dark');
    // }
  }

  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode;
  //   if (this.isDarkMode) {
  //     this.renderer.addClass(document.documentElement, 'dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     this.renderer.removeClass(document.documentElement, 'dark');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }
}
