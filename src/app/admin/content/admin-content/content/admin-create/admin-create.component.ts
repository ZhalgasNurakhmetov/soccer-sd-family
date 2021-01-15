import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {AdminCreateFormService} from './forms/admin-create.form.service';
import {AdminCreateFormModel} from './forms/admin-create.form.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCreateComponent implements OnInit {

  @Output() onCreateAdmin = new EventEmitter<AdminCreateFormModel>();
  @Output() onCancel = new EventEmitter();

  form = this.adminCreateFormService.adminCreateForm;

  constructor(
    private adminCreateFormService: AdminCreateFormService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  createAdmin() {
    if (!this.form.valid) {
      this.toaster.error('Заполните все обязательные поля', 'Ошибка', {timeOut: 3000});
      return
    }
    this.onCreateAdmin.emit(this.form.value);
  }

}
