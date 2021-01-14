import {AdminContentComponent} from './admin-content.component';
import {AdminCreateComponent} from './content/admin-create/admin-create.component';
import {AdminListComponent} from './content/admin-list/admin-list.component';
import {ControlBarComponent} from './content/admin-list/control-bar/control-bar.component';
import {AdminCreateFormService} from './content/admin-create/forms/admin-create.form.service';
import {AdminEditFormService} from './content/admin-list/forms/admin-edit.form.service';

export const adminContentComponents = [
  AdminContentComponent,
  AdminCreateComponent,
  AdminListComponent,
  ControlBarComponent
]

export const adminContentServices = [
  AdminCreateFormService,
  AdminEditFormService
]
