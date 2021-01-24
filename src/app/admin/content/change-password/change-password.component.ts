import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ChangePasswordFormService} from './forms/change-password.form.service';
import {Router} from '@angular/router';
import {AppRoutes} from '../../../app.routes';
import {AdminRoutes} from '../../admin.routes';
import {AdminApiService} from '../../api/admin.api.service';
import {ToastrService} from 'ngx-toastr';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'admin-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent {

  form = this.changePasswordFormService.form;
  loading = false;

  constructor(
    private changePasswordFormService: ChangePasswordFormService,
    private router: Router,
    private adminApiService: AdminApiService,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  changePassword() {
    this.loading = true;
    this.adminApiService.changePassword(this.form?.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        })
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
}
