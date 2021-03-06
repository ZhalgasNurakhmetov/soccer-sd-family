import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {User} from '../../core/models/user';
import {SetCoach} from '../store';
import {EditProfileApi} from './api/edit-profile.api';
import {EditProfileFormService} from './forms/edit-profile.form.service';
import {Router} from '@angular/router';
import {AppRoutes} from '../../app.routes';
import {CoachRoutes} from '../coach.routes';
import {EditProfileState, SetEditProfileIsLoading} from './store';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {EditProfileFormsModel} from './forms/edit-profile.forms.model';
import {finalize, takeUntil} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnDestroy{

  @Select(EditProfileState.isLoading) isLoading$: Observable<boolean>;

  private unsubscribe$ = new Subject();

  @Dispatch() setIsLoading = (isLoading: boolean) => new SetEditProfileIsLoading(isLoading);
  @Dispatch() setCoach = (coach: User) => new SetCoach(coach);

  constructor(
    private editProfileApi: EditProfileApi,
    private editProfileFormService: EditProfileFormService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService
  ) { }

  saveChanges(profile: EditProfileFormsModel) {
    this.setIsLoading(true);
    this.editProfileApi.editProfile(profile)
      .pipe(
        finalize(() => {
          this.setIsLoading(false);
          this.cd.markForCheck();
        }),
        takeUntil(this.unsubscribe$)
      ).subscribe(coach => {
        this.toaster.success('Данные успешно изменены. Изменения вступят в силу после обновления страницы', 'Готово', {timeOut: 3000});
        this.setCoach(coach);
        this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
        this.editProfileFormService.form.reset();
    }, error => {
        this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    })
  }

  cancel() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
    this.editProfileFormService.form.reset();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
