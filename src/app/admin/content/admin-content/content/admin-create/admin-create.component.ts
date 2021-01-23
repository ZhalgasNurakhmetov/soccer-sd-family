import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AdminCreateFormService} from './forms/admin-create.form.service';
import {AdminCreateFormModel} from './forms/admin-create.form.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCreateComponent {

  @Input() isLoading: boolean;

  @Output() onCreateAdmin = new EventEmitter<AdminCreateFormModel>();
  @Output() onCancel = new EventEmitter();

  form = this.adminCreateFormService.adminCreateForm;
  loading = false;

  constructor(
    private adminCreateFormService: AdminCreateFormService,
    private toaster: ToastrService
  ) { }

  createAdmin() {
    if (!this.form.valid) {
      this.toaster.error('Заполните все обязательные поля', 'Ошибка', {timeOut: 3000});
      return
    }
    this.onCreateAdmin.emit(this.form.value);
  }

}
