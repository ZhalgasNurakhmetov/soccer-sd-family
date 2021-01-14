import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {startView} from './index';

const routes: Routes = [
  {
    path: '',
    component: startView.startComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
