import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {ResetPasswordApiService} from './api/reset-password-api.service';
import {ResetPasswordFormService} from './forms/reset-password.form.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AppRoutes} from '../app.routes';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {

  form = this.resetPasswordForm.form;
  loading: boolean;

  constructor(
    private resetPasswordApi: ResetPasswordApiService,
    private resetPasswordForm: ResetPasswordFormService,
    private router: Router,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.loading = true;
    this.resetPasswordApi.resetPassword(this.form.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        })
      ).subscribe(() => {
        this.toaster.success('Письмо отправлено на указанную почту', 'Готово', {timeOut: 3000});
        this.router.navigate([AppRoutes.start]);
        this.resetPasswordForm.form.reset();
    }, error => {
        this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    })
  }

  cancel() {
    this.router.navigate([AppRoutes.start]);
    this.resetPasswordForm.form.reset();
  }
}
