import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartRoutingModule} from './start-routing.module';
import {startComponents, startServices} from './index';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [...startComponents],
  imports: [
    CommonModule,
    StartRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [...startServices]
})
export class StartModule { }
