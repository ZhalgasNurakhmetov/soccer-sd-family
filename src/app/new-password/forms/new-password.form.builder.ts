import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {NewPasswordFormModel} from './new-password.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initNewPasswordForm(): TypedFormGroup<NewPasswordFormModel> {
  return typedFormGroup({
    newPassword: new FormControl(null, [Validators.required]),
    confirmNewPassword: new FormControl(null, [Validators.required])
  });
}
