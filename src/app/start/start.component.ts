import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {StartFormService} from './forms/start.form.service';
import {AuthService} from '../core/auth/auth.service';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {User} from '../core/models/user';
import {SetAdmin} from '../admin/store/admin.action';
import {Router} from '@angular/router';
import {AppRoutes} from '../app.routes';
import {ToastrService} from 'ngx-toastr';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent {

  loginForm = this.startFormService.form;
  loading = false;

  @Dispatch() setAdmin = (admin: User) => new SetAdmin(admin);

  constructor(
    private authService: AuthService,
    private startFormService: StartFormService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService
  ) { }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        })
      ).subscribe(token => {
      this.authService.setToken(token);
      if (token?.user?.role === 'ADMIN') {
        this.setAdmin(token?.user);
        this.router.navigate([AppRoutes.admin]);
      } else {
        this.router.navigate([AppRoutes.coach]);
      }
      this.loginForm.reset();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

}
