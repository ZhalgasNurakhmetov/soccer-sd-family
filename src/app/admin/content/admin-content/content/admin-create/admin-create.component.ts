import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {AdminCreateFormService} from './forms/admin-create.form.service';
import {AdminCreateFormModel} from './forms/admin-create.form.model';

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
    private adminCreateFormService: AdminCreateFormService
  ) { }

  ngOnInit(): void {
  }

  createAdmin() {
    if (!this.form.valid) {
      console.log('invalid');
      return
    }
    this.onCreateAdmin.emit(this.form.value);
  }

}
