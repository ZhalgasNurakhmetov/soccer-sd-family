import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {ChangePasswordFormModel} from './change-password.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initChangePasswordForm(): TypedFormGroup<ChangePasswordFormModel> {
  return typedFormGroup({
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
    newPasswordConfirm: new FormControl(null, [Validators.required]),
  })
}
