import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ChangePasswordFormService} from './forms/change-password.form.service';
import {ChangePasswordApiService} from './api/change-password-api.service';
import {Router} from '@angular/router';
import {AppRoutes} from '../../app.routes';
import {CoachRoutes} from '../coach.routes';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent {

  form = this.changePasswordFormService.form;
  loading: boolean;

  constructor(
    private changePasswordFormService: ChangePasswordFormService,
    private changePasswordApi: ChangePasswordApiService,
    private router: Router,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  changePassword() {
    this.loading = true
    this.changePasswordApi.changePassword(this.form.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        })
      ).subscribe(() => {
      this.toaster.success('Пароль успешно изменен', 'Готово', {timeOut: 3000});
      this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
      this.changePasswordFormService.form.reset();
    }, error => {
      this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    })
  }

  cancel() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
    this.form.reset();
  }
}
