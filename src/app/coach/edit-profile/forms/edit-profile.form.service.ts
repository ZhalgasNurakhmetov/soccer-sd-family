import {Injectable} from '@angular/core';
import {initEditProfileForm} from './edit-profile.form.builder';

@Injectable()
export class EditProfileFormService {
  form = initEditProfileForm();
}
