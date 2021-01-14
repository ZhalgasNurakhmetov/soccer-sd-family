import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {User} from '../core/models/user';
import {AdminState} from './store';
import {Router} from '@angular/router';
import {AppRoutes} from '../app.routes';
import {AdminRoutes} from './admin.routes';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {

  @Select(AdminState.admin) admin$: Observable<User>;

  constructor(
    private router: Router
  ) { }

  goToAdmins() {
    this.router.navigate([AppRoutes.admin, AdminRoutes.admin]);
  }

  goToCoaches() {
    this.router.navigate([AppRoutes.admin, AdminRoutes.coach]);
  }

  goToPlayers() {
    this.router.navigate([AppRoutes.admin, AdminRoutes.player]);
  }

  ngOnInit(): void {
  }

}
