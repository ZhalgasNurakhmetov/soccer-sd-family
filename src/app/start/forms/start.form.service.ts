import {Injectable} from '@angular/core';
import {initLoginFormModel} from './start.form.builder';

@Injectable()
export class StartFormService {
  form = initLoginFormModel();
}
