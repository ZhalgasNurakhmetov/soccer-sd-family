import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {mainComponents} from './index';


@NgModule({
  declarations: [...mainComponents],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
