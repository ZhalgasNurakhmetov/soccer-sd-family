import {Injectable} from '@angular/core';
import {initPaymentForm} from './payment-form.form.builder';

@Injectable()
export class PaymentFormService {
  form = initPaymentForm();
}
