import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectImagesRoutingModule } from './project-images-routing.module';
import { ProjectImagesComponent } from './project-images.component';


@NgModule({
  declarations: [ProjectImagesComponent],
  imports: [
    CommonModule,
    ProjectImagesRoutingModule
  ]
})
export class ProjectImagesModule { }
