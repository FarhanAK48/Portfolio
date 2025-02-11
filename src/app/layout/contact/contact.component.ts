import { Component, OnInit } from '@angular/core';

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
      content: `<a href="mailto:mfarhanakhtar@gmail.com" class="text-blue-400 hover:underline">mfarhanakhtar@gmail.com</a>`,
    },
    {
      title: 'Phone',
      icon: 'phone',
      content: `<a href="tel:+923471701646" class="text-blue-400 hover:underline">+923471701646</a>`,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
