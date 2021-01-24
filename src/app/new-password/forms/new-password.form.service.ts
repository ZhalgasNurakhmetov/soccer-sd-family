import {Injectable} from '@angular/core';
import {initNewPasswordForm} from './new-password.form.builder';

@Injectable()
export class NewPasswordFormService {
  form = initNewPasswordForm();
}
