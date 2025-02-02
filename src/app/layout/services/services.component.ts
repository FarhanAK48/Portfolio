import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  technologies:any[] = [
    {
      name: 'Angular',
      image: '../../../assets/dev1.jpg',
      detail: 'A powerful front-end framework for building dynamic, single-page applications with a strong focus on performance and scalability.',
    },
    {
      name: 'Ionic',
      image: '../../../assets/dev4.jpg',
      detail: 'A versatile framework for creating cross-platform mobile applications with a single codebase, leveraging Angular for rich UI components.',
    },
    {
      name: 'React Js',
      image: '../../../assets/dev1.jpg',
      detail: 'A powerful front-end framework for building dynamic, single-page applications with a strong focus on performance and scalability.',
    },
    {
      name: 'Node.js',
      image: '../../../assets/dev5.jpg',
      detail: 'A JavaScript runtime enabling server-side development, allowing for efficient, scalable, and non-blocking back-end applications.',
    }
  ]
  skillArray:string[] = ['HTML','CSS','Bootstrap','Tailwind Css','JavaScript','Angular','Ionic', 'React Js','Node js']
  services:any[] = [
    {
      name: 'Front-End Development',
      desc: 'I design and develop responsive, user-friendly interfaces that deliver seamless experiences across web and mobile platforms, leveraging technologies like Angular, Ionic, JavaScript, HTML, CSS, Tailwind CSS, and Bootstrap.'
    },
    {
      name: 'Back-End Development',
      desc: 'I develop secure, scalable server-side applications and APIs to manage data and business logic efficiently.'
    }
  ]
  ngOnInit(): void {
  }

}
