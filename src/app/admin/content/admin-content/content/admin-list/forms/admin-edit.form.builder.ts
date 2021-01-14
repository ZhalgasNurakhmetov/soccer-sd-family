import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {AdminEditFormModel} from './admin-edit.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initAdminEditForm(): TypedFormGroup<AdminEditFormModel> {
  return typedFormGroup({
    username: new FormControl(null, [Validators.required]),
    givenName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
  })
}
