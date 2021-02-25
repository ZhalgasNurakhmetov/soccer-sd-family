import {EditProfileComponent} from './edit-profile.component';
import {EditProfileApi} from './api/edit-profile.api';
import {EditProfileFormService} from './forms/edit-profile.form.service';
import {EditProfileContentComponent} from './content/edit-profile-content/edit-profile-content.component';

export const editProfileComponents = [
  EditProfileComponent,
  EditProfileContentComponent
]

export const editProfileServices = [
  EditProfileApi,
  EditProfileFormService
]
