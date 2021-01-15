import {Injectable} from '@angular/core';
import {initCoachCreateForm} from './coach-creaate.form.builder';

@Injectable()
export class CoachCreateFormService {
  form = initCoachCreateForm();
}
