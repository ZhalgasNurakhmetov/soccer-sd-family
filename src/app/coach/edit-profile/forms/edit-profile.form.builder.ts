import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {EditProfileFormsModel} from './edit-profile.forms.model';
import {FormControl, Validators} from '@angular/forms';

export function initEditProfileForm(): TypedFormGroup<EditProfileFormsModel> {
  return typedFormGroup({
    givenName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    fatherName: new FormControl(null),
    city: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  })
}
