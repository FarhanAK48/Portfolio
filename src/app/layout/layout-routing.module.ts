import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule), },
      { path: "services", loadChildren: () => import("./services/services.module").then((m) => m.ServicesModule), },
      { path: "projects", loadChildren: () => import("./projects/projects.module").then((m) => m.ProjectsModule), },
      { path: "contact", loadChildren: () => import("./contact/contact.module").then((m) => m.ContactModule), },
      { path: "about", loadChildren: () => import("./about/about.module").then((m) => m.AboutModule), },
      { path: "journey", loadChildren: () => import("./journey/journey.module").then((m) => m.JourneyModule), },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
