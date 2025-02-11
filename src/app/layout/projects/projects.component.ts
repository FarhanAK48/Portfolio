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
      technologies: ['Ionic'],
      link: 'project1-link',
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
    },
    {
      name: 'Thurrock Training Consultancy',
      description:
        'This is another Angular application named Thurrock Training Consultancy, designed to assist students who aspire to study abroad in countries such as the UK, USA, Canada, Australia, and more.',
      technologies: ['Angular', 'Tailwind CSS', 'Laravel'],
      link: 'project4-link',
    },
  ];
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  navigate(){
    this.router.navigate(['/images']);
  }

}
