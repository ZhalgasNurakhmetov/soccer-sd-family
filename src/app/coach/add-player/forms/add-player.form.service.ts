import {Injectable} from '@angular/core';
import {initPlayerCreateForm, initPlayerForm} from './add-player.form.builder';

@Injectable()
export class AddPlayerFormService {
  form = initPlayerCreateForm();
  player = initPlayerForm();
}
