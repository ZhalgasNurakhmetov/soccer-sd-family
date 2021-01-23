import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {User} from '../core/models/user';
import {CoachState} from './store';
import {Router} from '@angular/router';
import {AppRoutes} from '../app.routes';
import {CoachRoutes} from './coach.routes';
import {AuthService} from '../core/auth/auth.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachComponent {

  @Select(CoachState.coach) coach$: Observable<User>;

  constructor(
    private router: Router,
    private authApi: AuthService
  ) { }

  goToMain() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.main]);
  }

  goToTeams() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
  }

  goToEdit() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.editProfile]);
  }

  goToChangePassword() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.changePassword]);
  }

  logout() {
    this.authApi.logout();
  }

}
