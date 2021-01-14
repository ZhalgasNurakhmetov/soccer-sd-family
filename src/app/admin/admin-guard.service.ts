import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { map, tap } from 'rxjs/operators';
import {User} from '../core/models/user';
import {SetAdmin} from './store';
import {AdminApiService} from './api/admin.api.service';

@Injectable()
export class AdminGuard implements CanActivate {
  @Dispatch() setAdmin = (admin: User) => new SetAdmin(admin);

  constructor(private adminApi: AdminApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.adminApi.getAdminInfo().pipe(
      map(admin => {
        if (admin) {
          this.setAdmin(admin);
          return true;
        }
        return false
      })
    );
  }
}
