import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneyRoutingModule } from './journey-routing.module';
import { JourneyComponent } from './journey.component';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  declarations: [JourneyComponent],
  imports: [
    CommonModule,
    JourneyRoutingModule,
    SharedModule
  ]
})
export class JourneyModule { }
