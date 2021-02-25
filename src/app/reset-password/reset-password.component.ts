import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ResetPasswordApi} from './api/reset-password.api';
import {ResetPasswordFormService} from './forms/reset-password.form.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AppRoutes} from '../app.routes';
import {finalize, takeUntil} from 'rxjs/operators';
import {ResetPasswordStateEnum} from './enums/reset-password.state.enum';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnDestroy {

  form = this.resetPasswordForm.form;
  formWithEmail = this.resetPasswordForm.formWithEmail;
  codeForm = this.resetPasswordForm.codeForm;
  resetPasswordStateEnum = ResetPasswordStateEnum;
  currentResetPasswordState = ResetPasswordStateEnum.RESET;
  loading: boolean;
  code: string;

  private unsubscribe$ = new Subject();

  constructor(
    private resetPasswordApi: ResetPasswordApi,
    private resetPasswordForm: ResetPasswordFormService,
    private router: Router,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  resetPassword() {
    this.loading = true;
    this.resetPasswordApi.resetPassword(this.form.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        }),
        takeUntil(this.unsubscribe$)
      ).subscribe(response => {
        this.toaster.success('Письмо с кодом отправлено на указанную почту', 'Готово', {timeOut: 3000});
        this.code = response?.message;
        this.currentResetPasswordState = ResetPasswordStateEnum.CODE;
        this.formWithEmail.patchValue({
          email: this.form.controls.email.value
        });
    }, error => {
        this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    })
  }

  checkResetCode() {
    this.loading = true;
    if (this.codeForm.controls.code.value !== this.code) {
      this.toaster.error('Неверный код подтверждения', 'Ошибка', {timeOut: 3000});
      this.loading = false;
      this.cd.markForCheck();
      return
    }
    this.toaster.success('Код подтвержден', 'Готово', {timeOut: 3000});
    this.currentResetPasswordState = ResetPasswordStateEnum.PASSWORD;
    this.loading = false;
    this.cd.markForCheck();
  }

  changePassword() {
    this.resetPasswordApi.changePassword(this.formWithEmail.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.toaster.success('Пароль успешно изменен', 'Готово', {timeOut: 3000});
        this.resetForm();
      }, error => {
        this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
      });
  }

  resetForm() {
    this.router.navigate([AppRoutes.start]);
    this.resetPasswordForm.form.reset();
    this.resetPasswordForm.formWithEmail.reset();
    this.resetPasswordForm.codeForm.reset();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
