import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  applyAnimation = false;
  constructor() { this.applyAnimation = true; }
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
  ];
  skills = [
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      more: [
        'Hooks',
        'Rxjs',
        'Angular Material',
        'Lazy Loading'
      ]
    },
    {
      name: 'Ionic',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      more: [
        'Hooks',
        'Capacitor',
        'Ionic Framework',
        'Third party labraries',
      ]
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      more: [
        'Express',
        'Sequelize',
        'Rest Api',
        'File system',
      ]
    },
    {
      name: 'React.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      more: [
        'Hooks',
        'Redux',
        'Context Api',
        'Material UI',
      ]
    }
  ];
  tools = [
    {
      category: 'Operating Systems',
      items: ['Windows', 'Android']
    },
    {
      category: 'IDE',
      items: ['Visual Studio Code', 'Android Studio']
    },
    {
      category: 'Databases',
      items: ['MongoDB Atlas', 'MongoDB Compass', 'Azure CosmosDB']
    },
    {
      category: 'Version Control System Software',
      items: ['Git', 'GitHub']
    },
    {
      category: 'Project Management Software',
      items: ['Jira']
    },
    {
      category: 'Documentation Software',
      items: ['Word', 'PowerPoint']
    },
    {
      category: 'Design Software',
      items: ['Canva']
    }
  ];
  cards = [
    {
      title: 'Web Development',
      description: 'Crafting responsive, dynamic, and scalable websites using modern web technologies.',
      image: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
      alt: 'Web Development'
    },
    {
      title: 'Mobile Solutions',
      description: 'Developing cross-platform mobile apps for seamless user experiences on iOS and Android.',
      image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
      alt: 'Mobile Solutions'
    },
    {
      title: 'Design & UX',
      description: 'Focusing on clean design and intuitive user interfaces to enhance engagement.',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      alt: 'Design & UX'
    },
    {
      title: 'Performance',
      description: 'Optimizing web and mobile applications for speed, responsiveness, and reliability.',
      image: 'https://cdn-icons-png.flaticon.com/512/8832/8832171.png',
      alt: 'Performance'
    }
  ];
  //  skills = [
  //   { skill: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  //   { skill: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  //   { skill: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  //   { skill: 'Tailwind Css', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  //   { skill: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  //   { skill: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  //   { skill: 'Ionic', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
  //   { skill: 'React Js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  //   { skill: 'Node js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
  // ];  

  ngOnInit(): void {
  }

}
