import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import {resetPasswordComponents, resetPasswordServices} from './index';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [...resetPasswordComponents],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    ReactiveFormsModule
  ],
  providers: [...resetPasswordServices]
})
export class ResetPasswordModule { }
