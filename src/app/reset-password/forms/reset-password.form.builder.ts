import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {ResetPasswordFormModel} from './reset-password.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initResetPasswordForm(): TypedFormGroup<ResetPasswordFormModel> {
  return typedFormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  })
}
