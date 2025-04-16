import { Component, OnInit } from '@angular/core';
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
      photos : [
       
      
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
      photos : [
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
      technologies: ['Ionic', 'CSS', ],
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


  images = false;
  showImage = false;
  showpictures = false;
  selectedProject:any;
  showImages: any[] = new Array(9).fill(false);
  constructor(
    private router:Router
  ) {
    this.applyAnimation = true;
   }
  applyAnimation = false;
 

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

  viewDetail(value:any){
    this.selectedProject = value;
    this.loadImages(); 
  
      this.images = true;      
      // setTimeout(() => this.showImage = true, 200);
      // setTimeout(() => this.showpictures = true, 500);
    
  }

}
