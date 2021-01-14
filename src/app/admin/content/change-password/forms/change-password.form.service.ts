import {Injectable} from '@angular/core';
import {initChangePasswordForm} from './change-password.form.builder';

@Injectable()
export class ChangePasswordFormService {
  form = initChangePasswordForm();
}
