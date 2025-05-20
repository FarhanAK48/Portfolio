import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'YoderLay',
      description:
        'This is an Ionic application named Yoderlay, designed to provide a seamless online service for individuals facing issues with everyday essentials such as electrical systems, ovens, refrigerators, plumbing, and more. The application enables users to report faults or request assistance, and it assigns the task to a nearby mechanic.',
      technologies: ['Ionic, CSS'],
      link: 'project1-link',
      photos: [


        "../../../assets/yoderlay/5.png",
        "../../../assets/yoderlay/6.png",
        "../../../assets/yoderlay/7.png",
        "../../../assets/yoderlay/8.png",
        "../../../assets/yoderlay/3.png",
        "../../../assets/yoderlay/4.png",
      ]
    },
    {
      name: 'Thurrock Training Consultancy',
      description:
        'This is an Angular application named Thurrock Training Consultancy, designed to assist students who aspire to study abroad in countries such as the UK, USA, Canada, Australia, and more.',
      technologies: ['Angular', 'Tailwind CSS', 'Laravel'],
      link: 'project2-link',
    },
    {
      name: 'Ok Stack',
      description:
        'This is an Angular application named OK Stack, developed to monitor servers, provide detailed information about server performance, and track errors along with their respective purposes.',
      technologies: ['Angular', 'Tailwind CSS', 'Node.js'],
      link: 'project3-link',
      photos: [
        "../../../assets/Ok-Stack/1.png",
        "../../../assets/Ok-Stack/10.png",
        "../../../assets/Ok-Stack/2.png",
        "../../../assets/Ok-Stack/3.png",
        "../../../assets/Ok-Stack/4.png",
        "../../../assets/Ok-Stack/5.png",
        "../../../assets/Ok-Stack/6.png",
        "../../../assets/Ok-Stack/7.png",
        "../../../assets/Ok-Stack/8.png",
        "../../../assets/Ok-Stack/9.png",
      ]
    },
    {
      name: 'Salon Service',
      description:
        'A modern salon service app built with Ionic that allows users to browse, book, and manage a wide range of grooming and beauty services — from haircuts and shaving to massages and facials — all in one place',
      technologies: ['Ionic', 'CSS',],
      link: 'project4-link',
      photos: [
        "../../../assets/Salon-service/1.png",
        "../../../assets/Salon-service/2.png",
        "../../../assets/Salon-service/3.png",
        "../../../assets/Salon-service/4.png",
        "../../../assets/Salon-service/5.png",
        "../../../assets/Salon-service/6.png",
        "../../../assets/Salon-service/7.png",
        "../../../assets/Salon-service/8.png",
      ]
    },
  ];
  project = [
    {
      title: 'Thurrock Training Consultancy',
      description:
        'Pelican is a platform designed to help families reach their education goals by offering personalized investment advice and fund-finding opportunities for student accounts. Sign up and start planning smarter today!',
      img: '../../../assets/WhatsApp Image 2023-09-05 at 12.17.07 PM.jpeg'
    },
    {
      title: 'Yoderlay',
      description:
        'Pelican is a platform designed to help families reach their education goals by offering personalized investment advice and fund-finding opportunities for student accounts. Sign up and start planning smarter today!',
      img: '../../../assets/yoderlay/1.png'

    },
    {
      title: 'Ok Stack',
      description:
        'Pelican is a platform designed to help families reach their education goals by offering personalized investment advice and fund-finding opportunities for student accounts. Sign up and start planning smarter today!',
      img: '../../../assets/Ok-Stack/1.png'

    },
    {
      title: 'Salon Service',
      description:
        'Pelican is a platform designed to help families reach their education goals by offering personalized investment advice and fund-finding opportunities for student accounts. Sign up and start planning smarter today!',

      img: '../../../assets/Salon-service/1.png'
    },
    // Add more items here
  ];

  sideProjects = [
    {
      title: 'Pharmacy App',
      description:
        'Built a role-based Pharmacy App with a dashboard, product catalog, and cart. Users can filter and add products to the cart, while admins manage products. Cart supports item removal and real-time price updates',
      img: '../../../assets/WhatsApp Image 2023-09-05 at 12.17.07 PM.jpeg'
    },
    {
      title: 'React Fundamental',
      description:
        "Completed a React Fundamentals project covering core concepts including components, hooks (useState, useEffect), routing, state management with Redux and Context API.",
      img: '../../../assets/yoderlay/1.png'

    },
    {
      title: 'Inventory Management',
      description:
        "Developed an Inventory Management system using Node.js, featuring product tracking, stock updates, and CRUD operations with role-based access control to manage user permissions efficiently.",
      img: '../../../assets/Ok-Stack/1.png'

    },

    // Add more items here
  ];
  timeline = [
    { title: 'Take a Break', detail: 'Step outside...', color: 'border-blue-500' },
    { title: 'Relax Your Mind', detail: 'Try some light meditation...', color: 'border-green-500' },
    { title: 'Get Inspired', detail: 'Look at creative work...', color: 'border-purple-500' }
  ];
  images = false;
  showImage = false;
  showpictures = false;
  selectedProject: any;
  showImages: any[] = new Array(9).fill(false);
  constructor(
    private router: Router
  ) {
    this.applyAnimation = true;
  }
  applyAnimation = false;
showButton = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showButton = window.pageYOffset > 300; 
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

  ngOnInit(): void {

  }



  loadImages() {
    this.showImages = new Array(9).fill(false);

    for (let i = 0; i < this.showImages.length; i += 2) {
      setTimeout(() => {
        for (let j = i; j < i + 2 && j < this.showImages.length; j++) {
          this.showImages[j] = true;
        }
      }, i * 500);
    }
  }

  viewDetail(value: any) {
    this.selectedProject = value;
    this.loadImages();

    this.images = true;
    // setTimeout(() => this.showImage = true, 200);
    // setTimeout(() => this.showpictures = true, 500);

  }

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

}
