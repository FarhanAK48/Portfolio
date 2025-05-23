import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateLeftDirective } from '../../_directive/animate-left.directive';
import { AnimateRightDirective } from '../../_directive/animate-right.directive';



@NgModule({
  declarations: [
    AnimateLeftDirective,
    AnimateRightDirective
  ],
  imports: [
    CommonModule
  ],
   exports: [
    AnimateLeftDirective,
    AnimateRightDirective,
   ]
})
export class SharedModule { }
