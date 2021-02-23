import {Injectable} from '@angular/core';
import {initResetPasswordCodeForm, initResetPasswordForm, initResetPasswordWithEmailForm} from './reset-password.form.builder';

@Injectable()
export class ResetPasswordFormService {
  form = initResetPasswordForm();
  formWithEmail = initResetPasswordWithEmailForm();
  codeForm = initResetPasswordCodeForm();
}
