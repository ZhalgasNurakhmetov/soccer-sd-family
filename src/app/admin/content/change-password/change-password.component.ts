import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ChangePasswordFormService} from './forms/change-password.form.service';
import {Router} from '@angular/router';
import {AppRoutes} from '../../../app.routes';
import {AdminRoutes} from '../../admin.routes';
import {AdminApi} from '../../api/admin.api';
import {ToastrService} from 'ngx-toastr';
import {finalize, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'admin-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnDestroy{

  form = this.changePasswordFormService.form;
  loading = false;

  private unsubscribe$ = new Subject();

  constructor(
    private changePasswordFormService: ChangePasswordFormService,
    private router: Router,
    private adminApi: AdminApi,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  changePassword() {
    this.loading = true;
    this.adminApi.changePassword(this.form?.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        }),
        takeUntil(this.unsubscribe$)
      ).subscribe(() => {
      this.toaster.success('Пароль успешно изменен', 'Готово', {timeOut: 3000});
      this.router.navigate([AppRoutes.admin, AdminRoutes.admin]);
      this.changePasswordFormService.form.reset();
    }, error => {
      this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    });
  }

  cancel() {
    this.router.navigate([AppRoutes.admin, AdminRoutes.admin]);
    this.changePasswordFormService.form.reset();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
