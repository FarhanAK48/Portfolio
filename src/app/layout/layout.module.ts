import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AnimateLeftDirective } from '../_directive/animate-left.directive';
import { AnimateRightDirective } from '../_directive/animate-right.directive';



@NgModule({
  declarations: [
    LayoutComponent,

    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
