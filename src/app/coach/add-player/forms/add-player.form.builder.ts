import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {FormControl, Validators} from '@angular/forms';
import {PlayerCreateFormModel, PlayerCreateModel} from './add-player.form.model';

export function initPlayerCreateForm(): TypedFormGroup<PlayerCreateFormModel> {
  return typedFormGroup({
    givenName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    fatherName: new FormControl(null),
    birthdate: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    height: new FormControl(null, [Validators.required]),
    weight: new FormControl(null, [Validators.required]),
    activeFoot: new FormControl(null, [Validators.required]),
    team: new FormControl(null),
  })
}

export function initPlayerForm(): TypedFormGroup<PlayerCreateModel> {
  return typedFormGroup({
    givenName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    fatherName: new FormControl(null),
    birthdate: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    height: new FormControl(null, [Validators.required]),
    weight: new FormControl(null, [Validators.required]),
    activeFoot: new FormControl(null, [Validators.required]),
    team: new FormControl(null, [Validators.required]),
  })
}
