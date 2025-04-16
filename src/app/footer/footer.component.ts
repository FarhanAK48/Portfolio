import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // constructor()  {
  //   this.applyAnimation = true;
  //  }
  applyAnimation = false;
  constructor(private router: Router, private layoutService:LayoutService) { }
  selectedTab: any = 'Home';
  tabs = [
    'Home', 'Services', 'projects', 'About', 'Contact'
  ];


  ngOnInit(): void {
    this.applyAnimation = true;
  }

  changeTab(onboardStep: string) {
    this.selectedTab = onboardStep;
    this.layoutService.sendTab(this.selectedTab);
    localStorage.setItem('selectedTab', this.selectedTab);

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
        this.router.navigate(['/about']);
        break;
      case 'Contact':
        this.router.navigate(['/contact']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }

}
