import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {EditPlayerFormModel} from './edit-player-form.model';
import {FormControl, Validators} from '@angular/forms';

export function initEditPlayerForm(): TypedFormGroup<EditPlayerFormModel> {
  return typedFormGroup({
    weight: new FormControl(null, [Validators.required]),
    height: new FormControl(null, [Validators.required]),
    team: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    activeFoot: new FormControl(null, [Validators.required]),
    position: new FormControl(null, [Validators.required]),
    photo: new FormControl(null)
  })
}
