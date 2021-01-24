import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPasswordRoutingModule } from './new-password-routing.module';
import {newPasswordComponents, newPasswordServices} from './index';


@NgModule({
  declarations: [...newPasswordComponents],
  imports: [
    CommonModule,
    NewPasswordRoutingModule
  ],
  providers: [...newPasswordServices]
})
export class NewPasswordModule { }
