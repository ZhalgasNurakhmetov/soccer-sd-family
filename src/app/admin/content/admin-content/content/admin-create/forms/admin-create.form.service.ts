import {Injectable} from '@angular/core';
import {initAdminCreateForm} from './admin-create.form.builder';

@Injectable()
export class AdminCreateFormService {
  adminCreateForm = initAdminCreateForm();
}
