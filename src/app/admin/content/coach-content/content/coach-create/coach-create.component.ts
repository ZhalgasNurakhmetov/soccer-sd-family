import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CoachCreateFormService} from './forms/coach-create.form.service';
import {CoachCreateFormModel} from './forms/coach-create,form.model';
import {ToastrService} from 'ngx-toastr';
import {EntityListService} from '../../../../../services/entity-list.service';

@Component({
  selector: 'coach-create',
  templateUrl: './coach-create.component.html',
  styleUrls: ['./coach-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachCreateComponent {

  @Input() isLoading: boolean;

  @Output() onCreateCoach = new EventEmitter<CoachCreateFormModel>();
  @Output() onCancel = new EventEmitter();

  form = this.coachCreateFormService.form;
  cities = this.entities.cities;

  constructor(
    private coachCreateFormService: CoachCreateFormService,
    private toaster: ToastrService,
    private entities: EntityListService
  ) { }

  createCoach() {
    if (!this.form.valid) {
      this.toaster.error('Заполните все обязательные поля', 'Ошибка', {timeOut: 3000});
      return
    }
    this.onCreateCoach.emit(this.form?.value);
  }

  setCity(city: string) {
    this.form.patchValue({
      city
    });
  }
}
