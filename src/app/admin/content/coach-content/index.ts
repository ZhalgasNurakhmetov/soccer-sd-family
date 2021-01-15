import {CoachContentComponent} from './coach-content.component';
import {CoachListComponent} from './content/coach-list/coach-list.component';
import {CoachCreateComponent} from './content/coach-create/coach-create.component';
import {ControlBarComponent} from './content/coach-list/control-bar/control-bar.component';
import {CoachCreateFormService} from './content/coach-create/forms/coach-create.form.service';

export const coachContentComponents = [
  CoachContentComponent,
  CoachListComponent,
  CoachCreateComponent,
  ControlBarComponent
]

export const coachContentServices = [
  CoachCreateFormService
]
