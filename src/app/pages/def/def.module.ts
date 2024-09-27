import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefRoutingModule } from './def-routing.module';
import { DefComponent } from './def.component';


@NgModule({
  declarations: [
    DefComponent
  ],
  imports: [
    CommonModule,
    DefRoutingModule
  ]
})
export class DefModule { }
