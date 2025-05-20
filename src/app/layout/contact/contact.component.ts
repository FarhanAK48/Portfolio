import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactCards = [
    {
      title: 'Location',
      icon: 'location',
      content: 'Ali Town, Raiwand road<br>Lahore, Pakistan',
    },
    {
      title: 'Email',
      icon: 'email',
      content: `<a href="mailto:mfarhanakhtar48@gmail.com" class="text-blue-400 hover:underline">mfarhanakhtar48@gmail.com</a>`,
    },
    {
      title: 'Phone',
      icon: 'phone',
      content: `<a href="tel:+923471701646" class="text-blue-400 hover:underline">+923471701646</a>`,
    },
  ];
  applyAnimation = false;
  constructor() {
      this.applyAnimation = true;
  
   }

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

}
