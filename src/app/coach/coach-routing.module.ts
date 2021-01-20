import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachRoutes} from './coach.routes';
import {CoachGuard} from './coach-guard.service';
import {CoachComponent} from './coach.component';

const routes: Routes = [
  {
    path: '',
    component: CoachComponent,
    children: [
      {
        path: CoachRoutes.teams,
        loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: CoachRoutes.teams
      }
    ],
    canActivate: [CoachGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
