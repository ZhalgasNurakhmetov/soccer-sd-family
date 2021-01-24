import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {AdminCreateFormModel} from './admin-create.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initAdminCreateForm(): TypedFormGroup<AdminCreateFormModel> {
  return typedFormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    password: new FormControl(null, [Validators.required]),
    givenName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  })
}
