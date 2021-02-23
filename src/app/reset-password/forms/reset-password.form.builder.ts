import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {ResetPasswordCode, ResetPasswordForm, ResetPasswordFormModel} from './reset-password.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initResetPasswordForm(): TypedFormGroup<ResetPasswordFormModel> {
  return typedFormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  });
}

export function initResetPasswordWithEmailForm(): TypedFormGroup<ResetPasswordForm> {
  return typedFormGroup({
    email: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    newPasswordConfirm: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
}

export function initResetPasswordCodeForm(): TypedFormGroup<ResetPasswordCode> {
  return typedFormGroup({
    code: new FormControl(null, [Validators.required])
  });
}
