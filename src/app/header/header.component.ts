import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../service/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private renderer:Renderer2, private layoutService:LayoutService) {

  }
  selectedTab: any = 'Home';
  menuOpened = false;
  isDarkMode = false;
  tabs = [
    'Home', 'Services','Journey', 'projects', 'About', 'Contact'
  ];
 private sub!:Subscription;

  ngOnInit(): void {
  this.sub =  this.layoutService.message$.subscribe(val => this.selectedTab = val);
    const savedTab = localStorage.getItem('selectedTab');
    console.log('Tab',savedTab);
    if (savedTab) {
      this.selectedTab = savedTab;
      this.router.navigate([`/${this.selectedTab.toLowerCase()}`]);
    }

    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    }

  }

  changeTab(onboardStep: string) {
    this.selectedTab = onboardStep;
    localStorage.setItem('selectedTab', this.selectedTab);
    switch (onboardStep) {
      case 'Home':
        this.router.navigate(['/home']);
        this.menuOpened = false;
        break;
      case 'Services':
        this.router.navigate(['/services']);
        this.menuOpened = false;
        break;
      case 'projects':
        this.router.navigate(['/projects']);
        this.menuOpened = false;
        break;
      case 'About':
        this.router.navigate(['/about']);
        this.menuOpened = false;
        break;
        case 'Journey':
        this.router.navigate(['/journey']);
        this.menuOpened = false;
        break;
      case 'Contact':
        this.router.navigate(['/contact']);
        this.menuOpened = false;
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }


  clickOut() {
    this.menuOpened = false;
    
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
      localStorage.setItem('theme', 'light');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // clean up
  }
}
