import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutes} from './app.routes';

const routes: Routes = [
  {
    path: AppRoutes.start,
    loadChildren: () => import('./start/start.module').then(m => m.StartModule)
  },
  {
    path: AppRoutes.admin,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: AppRoutes.coach,
    loadChildren: () => import('./coach/coach.module').then(m => m.CoachModule)
  },
  {
    path: AppRoutes.reset,
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: AppRoutes.newPassword,
    loadChildren: () => import('./new-password/new-password.module').then(m => m.NewPasswordModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.start,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
