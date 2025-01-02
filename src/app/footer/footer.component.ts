import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }
  selectedTab: any = 'Home';
  tabs = [
    'Home', 'Services', 'projects', 'About', 'Contact'
  ];


  ngOnInit(): void {
  }

  changeTab(onboardStep: string) {
    this.selectedTab = onboardStep;
    switch (onboardStep) {
      case 'Home':
        this.router.navigate(['/home']);
        break;
      case 'Services':
        this.router.navigate(['/services']);
        break;
      case 'projects':
        this.router.navigate(['/projects']);
        break;
      case 'About':
        this.router.navigate(['/']);
        break;
      case 'Contact':
        this.router.navigate(['/']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

}
