import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ClickedOutsideDirective } from '../_directive/clickoutside.directive';


@NgModule({
  declarations: [ClickedOutsideDirective],
  imports: [
    CommonModule,
    HeaderRoutingModule,
  ]
})
export class HeaderModule { }
