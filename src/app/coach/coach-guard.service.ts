import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {map} from 'rxjs/operators';
import {User} from '../core/models/user';
import {SetCoach} from './store';
import {CoachApiService} from './api/coach-api.service';

@Injectable()
export class CoachGuard implements CanActivate {
  @Dispatch() setCoach = (coach: User) => new SetCoach(coach);

  constructor(private coachApi: CoachApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.coachApi.getCoachInfo().pipe(
      map(coach => {
        if (coach) {
          this.setCoach(coach);
          return true;
        }
        return false
      })
    );
  }
}
