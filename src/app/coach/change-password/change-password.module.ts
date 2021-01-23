import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import {changePasswordComponents, changePasswordServices} from './index';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [...changePasswordComponents],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    ReactiveFormsModule
  ],
  providers: [...changePasswordServices]
})
export class ChangePasswordModule { }
