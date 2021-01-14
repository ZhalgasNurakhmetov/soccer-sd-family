import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {LoginFormModel} from './start.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initLoginFormModel(): TypedFormGroup<LoginFormModel> {
  return typedFormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
}
