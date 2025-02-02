import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectImagesComponent } from './project-images.component';

const routes: Routes = [{
  path:'', component:ProjectImagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectImagesRoutingModule { }
