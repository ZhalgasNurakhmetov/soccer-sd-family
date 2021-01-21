import {Injectable} from '@angular/core';
import {initPlayerCreateForm, initPlayerForm} from './player-create.form.builder';

@Injectable()
export class PlayerCreateFormService {
  form = initPlayerCreateForm();
  player = initPlayerForm();
}
