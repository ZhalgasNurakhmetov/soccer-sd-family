import {Injectable} from '@angular/core';
import {initAdminEditForm} from './admin-edit.form.builder';

@Injectable()
export class AdminEditFormService {
  form = initAdminEditForm();
}
