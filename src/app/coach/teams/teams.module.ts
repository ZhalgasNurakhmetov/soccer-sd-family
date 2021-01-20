import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import {TeamsComponent} from './teams.component';
import {teamsComponents, teamsServices} from './index';
import {TeamsStoreModule} from './store/teams-store.module';


@NgModule({
  declarations: [...teamsComponents],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    TeamsStoreModule
  ],
  providers: [...teamsServices]
})
export class TeamsModule { }
