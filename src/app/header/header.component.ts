import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {

  }
  selectedTab: any = 'Home';
  menuOpened = false;
  tabs = [
    'Home', 'Services', 'projects', 'About', 'Contact'
  ];


  ngOnInit(): void {
    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
      this.selectedTab = savedTab;
      this.router.navigate([`/${this.selectedTab.toLowerCase()}`]);
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
    console.log('Clicked outside:', event); // Debugging
    this.menuOpened = false;
    
  }
  // clickOut(event: any) {
  //   console.log('clicked...')
  //   // if (event) {
  //   if(this.menuOpened){
  //     this.menuOpened = false;
  //   } else {
  //     this.menuOpened = true;
  //   }
  //   // }
  // }
}
