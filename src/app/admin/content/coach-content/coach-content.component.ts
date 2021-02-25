import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {AdminState, SetCoachCreatingIsLoading, SetCoachDeletingIsLoading, SetCoachTabState} from '../../store';
import {CoachTabState} from './enums/coach-tab.state.enum';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {User} from '../../../core/models/user';
import {AdminApi} from '../../api/admin.api';
import {ToastrService} from 'ngx-toastr';
import {CoachCreateFormModel} from './content/coach-create/forms/coach-create,form.model';
import {CoachCreateFormService} from './content/coach-create/forms/coach-create.form.service';
import {finalize, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'coach-content',
  templateUrl: './coach-content.component.html',
  styleUrls: ['./coach-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachContentComponent implements OnInit, OnDestroy {

  @Select(AdminState.coachTabState) coachTabState$: Observable<CoachTabState>;
  @Select(AdminState.coachCreatingIsLoading) coachCreatingIsLoading$: Observable<boolean>;
  @Select(AdminState.coachDeletingIsLoading) coachDeletingIsLoading$: Observable<boolean>;

  coachList: User[] = [];
  coachTabState = CoachTabState;

  private unsubscribe$ = new Subject();

  @Dispatch() setCoachTabState = (coachTabState: CoachTabState) => new SetCoachTabState(coachTabState);
  @Dispatch() setCoachCreatingIsLoading = (coachCreatingIsLoading: boolean) => new SetCoachCreatingIsLoading(coachCreatingIsLoading);
  @Dispatch() setCoachDeletingIsLoading = (coachDeletingIsLoading: boolean) => new SetCoachDeletingIsLoading(coachDeletingIsLoading);

  constructor(
    private adminApi: AdminApi,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef,
    private coachCreateFormService: CoachCreateFormService
  ) { }

  ngOnInit(): void {
    this.getCoachList();
  }

  goToCoachCreate() {
    this.setCoachTabState(this.coachTabState.CREATE);
    this.cd.markForCheck();
  }

  createCoach(coachInfo: CoachCreateFormModel) {
    this.setCoachCreatingIsLoading(true);
    this.cd.markForCheck();
    this.adminApi.createCoach(coachInfo)
      .pipe(
        finalize(() => {
          this.setCoachCreatingIsLoading(false);
          this.cd.markForCheck();
        }),
        takeUntil(this.unsubscribe$)
      ).subscribe(user => {
      this.coachList.push(user);
      this.toaster.success('Тренер создан', 'Готово', {timeOut: 3000});
      this.setCoachTabState(this.coachTabState.LIST);
      this.coachCreateFormService.form.reset();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  cancelCreating() {
    this.coachCreateFormService.form.reset();
    this.setCoachTabState(this.coachTabState.LIST);
    this.cd.markForCheck();
  }

  deleteCoach(id: string) {
    this.adminApi.deleteCoach(id)
      .pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.coachList = this.coachList.filter(coach => coach.id !== id);
      this.toaster.success('Тренер успешно удален', 'Готово', {timeOut: 3000});
      this.cd.markForCheck();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  deleteAllCoaches() {
    if (!this.coachList || this.coachList.length === 0) {
      this.toaster.show('Нет данных для удаления', 'Внимание', {timeOut: 3000});
      return
    }
    this.setCoachDeletingIsLoading(true);
    this.cd.markForCheck();
    this.adminApi.deleteAllCoaches()
      .pipe(
        finalize(() => {
          this.setCoachDeletingIsLoading(false);
          this.cd.markForCheck();
        }),
        takeUntil(this.unsubscribe$)
      ).subscribe(response => {
      this.coachList = [];
      this.toaster.success(response?.message, 'Готово', {timeOut: 3000});
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  private getCoachList() {
    this.adminApi.getCoachList()
      .pipe(takeUntil(this.unsubscribe$)).subscribe(coachList => {
      this.coachList = coachList;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
