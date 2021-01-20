import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoachRoutingModule} from './coach-routing.module';
import {coachComponents, coachServices} from './index';
import {CoachStoreModule} from './store/coach-store.module';


@NgModule({
  declarations: [...coachComponents],
  imports: [
    CommonModule,
    CoachRoutingModule,
    CoachStoreModule
  ],
  providers: [...coachServices]
})
export class CoachModule { }
