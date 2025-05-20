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
  techStack = [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Tailwind",
    "REST API",
    "MongoDB",
    "CosmosDB",
    "Git",
    "GitHub"
  ];
  particles: any[] = [];

  ngOnInit() {
    this.applyAnimation = true;
  
    this.particles = Array.from({ length: 50 }, () => ({
      size: Math.random() * 6 + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 10,
      delay: Math.random() * 6,
      color: this.randomColor()
    }));
  }

  randomColor(): string {
    // const colors = ['#fbbf24', '#3b82f6', '#10b981', '#ef4444', '#a78bfa'];
    const colors = ['#ffffff', '#000000'];
    return colors[Math.floor(Math.random() * colors.length)];
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
