import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamsRoutingModule} from './teams-routing.module';
import {teamsComponents, teamsServices} from './index';
import {TeamsStoreModule} from './store/teams-store.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [...teamsComponents],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    TeamsStoreModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  providers: [...teamsServices]
})
export class TeamsModule { }
