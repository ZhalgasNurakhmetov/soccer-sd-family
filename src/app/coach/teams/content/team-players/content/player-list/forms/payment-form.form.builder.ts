import {typedFormGroup, TypedFormGroup} from 'ngx-forms-typed';
import {PaymentFormFormModel} from './payment-form.form.model';
import {FormControl, Validators} from '@angular/forms';

export function initPaymentForm(): TypedFormGroup<PaymentFormFormModel> {
  return typedFormGroup({
    amount: new FormControl(null, [Validators.required]),
    date: new FormControl(new Date(), [Validators.required])
  })
}
