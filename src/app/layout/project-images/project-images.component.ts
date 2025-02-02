import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.scss']
})
export class ProjectImagesComponent implements OnInit {

  constructor() { }
yoderlayPhotos:any[] = [
  "../../../assets/yoderlay/1.png",
  "../../../assets/yoderlay/2.png",
  "../../../assets/yoderlay/3.png",
  "../../../assets/yoderlay/4.png",
  "../../../assets/yoderlay/5.png",
  "../../../assets/yoderlay/6.png",
  "../../../assets/yoderlay/7.png",
  "../../../assets/yoderlay/8.png",
]
  ngOnInit(): void {
  }

}
