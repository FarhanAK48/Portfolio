import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor()  {
    this.applyAnimation = true;
   }
   languages = [
    { name: 'Urdu', level: 'Native', filled: 10 },
    { name: 'English', level: 'Professional Working Proficiency', filled: 6 },
    { name: 'Punjabi', level: 'Conversational', filled: 7 }
  ];
  activities: any = [
    {
      title: 'Gym',
      icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png'
    },
    {
      title: 'Swimming',
      icon: 'https://cdn-icons-png.flaticon.com/512/2548/2548537.png'
    },
    {
      title: 'Travelling',
      icon: 'https://cdn-icons-png.flaticon.com/512/1085/1085493.png'
    },
    {
      title: 'Movies',
      icon: 'https://cdn-icons-png.flaticon.com/512/1974/1974054.png'
    },
    {
      title: 'Cricket',
      icon: 'https://cdn-icons-png.flaticon.com/512/2158/2158416.png'
    }
  ];
  applyAnimation = false;
showButton = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showButton = window.pageYOffset > 300; 
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  ngOnInit(): void {
  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/M_FARHAN.pdf'; 
    link.download = 'M_FARHAN.pdf'; 
    link.click();
  }

}
