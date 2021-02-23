import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from '../../../../core/models/user';
import {EditProfileFormService} from '../../forms/edit-profile.form.service';
import {EditProfileFormsModel} from '../../forms/edit-profile.forms.model';
import {ToastrService} from 'ngx-toastr';
import {EntityListService} from '../../../../services/entity-list.service';
import {Select} from '@ngxs/store';
import {CoachState} from '../../../store';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'edit-profile-content',
  templateUrl: './edit-profile-content.component.html',
  styleUrls: ['./edit-profile-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileContentComponent implements OnInit, OnDestroy {
  @Select(CoachState.coach) coach$: Observable<User>;

  @Input() isLoading: boolean;
  @Output() onSaveChanges = new EventEmitter<EditProfileFormsModel>();
  @Output() onCancel = new EventEmitter();

  form = this.editProfileFormService.form;
  cities = this.entities.cities;

  private unsubscribe$ = new Subject();

  constructor(
    private editProfileFormService: EditProfileFormService,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService,
    private entities: EntityListService
  ) { }

  ngOnInit(): void {
    this.subscribeToCoach();
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

  private subscribeToCoach() {
    this.coach$.pipe(takeUntil(this.unsubscribe$)).subscribe(coach => {
      this.form.patchValue({
        givenName: coach?.givenName,
        lastName: coach?.lastName,
        fatherName: coach?.fatherName,
        city: coach?.city,
        email: coach?.email,
        phone: coach?.phone
      });
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
