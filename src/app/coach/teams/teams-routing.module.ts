import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsComponent} from './teams.component';
import {TeamsGuard} from './teams-guard.service';
import {TeamsRoutes} from './teams.routes';
import {TeamListComponent} from './content/team-list/team-list.component';
import {TeamPlayersComponent} from './content/team-players/team-players.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: TeamsRoutes.teams,
        component: TeamListComponent
      },
      {
        path: TeamsRoutes.players,
        component: TeamPlayersComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: TeamsRoutes.teams
      }
    ],
    canActivate: [TeamsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
