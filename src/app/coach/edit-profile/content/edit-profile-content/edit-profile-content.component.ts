import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../../../../core/models/user';
import {EditProfileFormService} from '../../forms/edit-profile.form.service';
import {EditProfileFormsModel} from '../../forms/edit-profile.forms.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'edit-profile-content',
  templateUrl: './edit-profile-content.component.html',
  styleUrls: ['./edit-profile-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileContentComponent implements AfterViewInit {

  @Input() coach: User;
  @Input() isLoading: boolean;
  @Output() onSaveChanges = new EventEmitter<EditProfileFormsModel>();
  @Output() onCancel = new EventEmitter();

  form = this.editProfileFormService.form;
  cities = ['Нур-Султан', 'Алматы']

  constructor(
    private editProfileFormService: EditProfileFormService,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService
  ) { }

  ngAfterViewInit(): void {
    this.form.patchValue({
      givenName: this.coach?.givenName,
      lastName: this.coach?.lastName,
      fatherName: this.coach?.fatherName,
      city: this.coach?.city,
      email: this.coach?.email,
      phone: this.coach?.phone
    });
    this.cd.detectChanges();
  }

  saveChanges() {
    if (!this.form.valid) {
      this.toaster.error('Заполните все обязательные поля', 'Ошибка', {timeOut: 3000});
      return
    }
    this.onSaveChanges.emit(this.form.value);
  }

  setCity(city: string) {
    this.form.patchValue({
      city
    });
  }

}
