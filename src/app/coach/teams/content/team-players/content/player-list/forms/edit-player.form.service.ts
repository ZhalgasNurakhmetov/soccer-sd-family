import {Injectable} from '@angular/core';
import {initEditPlayerForm} from './edit-player.form.builder';

@Injectable()
export class EditPlayerFormService {
  form = initEditPlayerForm();
}
