import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {map} from 'rxjs/operators';
import {SetTeams} from './store';
import {Team} from '../../core/models/team';
import {TeamsApiService} from './api/teams-api.service';

@Injectable()
export class TeamsGuard implements CanActivate {
  @Dispatch() setTeams = (teams: Team[]) => new SetTeams(teams);

  constructor(private teamsApi: TeamsApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.teamsApi.getTeams().pipe(
      map(teams => {
        this.setTeams(teams);
        return true;
      })
    );
  }
}
