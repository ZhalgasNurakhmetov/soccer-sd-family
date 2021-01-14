import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {adminView} from './index';
import {AdminGuard} from './admin-guard.service';
import {AdminRoutes} from './admin.routes';
import {AdminContentComponent} from './content/admin-content/admin-content.component';
import {CoachContentComponent} from './content/coach-content/coach-content.component';
import {PlayerContentComponent} from './content/player-content/player-content.component';

const routes: Routes = [
  {
    path: '',
    component: adminView.adminView,
    children: [
      {
        path: AdminRoutes.admin,
        component: AdminContentComponent
      },
      {
        path: AdminRoutes.coach,
        component: CoachContentComponent
      },
      {
        path: AdminRoutes.player,
        component: PlayerContentComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AdminRoutes.admin
      }
    ],
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
