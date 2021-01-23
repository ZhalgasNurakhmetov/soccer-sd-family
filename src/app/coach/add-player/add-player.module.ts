import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPlayerRoutingModule } from './add-player-routing.module';
import {addPlayerComponents, addPlayerServices} from './index';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [...addPlayerComponents],
  imports: [
    CommonModule,
    AddPlayerRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  providers: [...addPlayerServices]
})
export class AddPlayerModule { }
