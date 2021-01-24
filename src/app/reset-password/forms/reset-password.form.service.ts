import {Injectable} from '@angular/core';
import {initResetPasswordForm} from './reset-password.form.builder';

@Injectable()
export class ResetPasswordFormService {
  form = initResetPasswordForm();
}
