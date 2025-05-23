import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AnimateLeftDirective } from '../../_directive/animate-left.directive';
import { AnimateRightDirective } from '../../_directive/animate-right.directive';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  declarations: [AboutComponent, 
      ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
