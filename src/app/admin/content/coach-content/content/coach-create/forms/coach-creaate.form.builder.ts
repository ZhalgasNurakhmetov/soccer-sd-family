import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {CoachCreateFormModel} from './coach-create,form.model';
import {FormControl, Validators} from '@angular/forms';

export function initCoachCreateForm(): TypedFormGroup<CoachCreateFormModel> {
  return typedFormGroup({
    username: new FormControl(null, [Validators.required]),
    givenName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    fatherName: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    city: new FormControl(null, [Validators.required]),
  });
}
