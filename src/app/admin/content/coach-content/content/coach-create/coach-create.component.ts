import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {CoachCreateFormService} from './forms/coach-create.form.service';
import {CoachCreateFormModel} from './forms/coach-create,form.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'coach-create',
  templateUrl: './coach-create.component.html',
  styleUrls: ['./coach-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachCreateComponent {

  @Output() onCreateCoach = new EventEmitter<CoachCreateFormModel>();
  @Output() onCancel = new EventEmitter();

  form = this.coachCreateFormService.form;
  cities = ['Нур-Султан', 'Алматы']

  constructor(
    private coachCreateFormService: CoachCreateFormService,
    private toaster: ToastrService
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
