import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {AdminTabState} from './enums/admin-tab.state.enum';
import {AdminState, SetAdminOnEdit, SetAdminTabState} from '../../store';
import {AdminApiService} from '../../api/admin.api.service';
import {User} from '../../../core/models/user';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {AdminCreateFormModel} from './content/admin-create/forms/admin-create.form.model';
import {AdminCreateFormService} from './content/admin-create/forms/admin-create.form.service';
import {takeUntil} from 'rxjs/operators';
import {AdminEditFormService} from './content/admin-list/forms/admin-edit.form.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminContentComponent implements OnInit, OnDestroy {

  @Select(AdminState.adminTabState) adminTabState$: Observable<AdminTabState>;
  @Select(AdminState.admin) admin$: Observable<User>;
  @Select(AdminState.idOfAdminOnEdit) idOfAdminOnEdit$: Observable<number>;

  currentAdminTabState: AdminTabState;
  adminTabState = AdminTabState;
  adminList: User[];

  private unsubscribe$ = new Subject();

  @Dispatch() setAdminTabState = (adminTabState: AdminTabState) => new SetAdminTabState(adminTabState);
  @Dispatch() setIdOfAdminOnEdit = (idOfAdminOnEdit: number) => new SetAdminOnEdit(idOfAdminOnEdit);

  constructor(
    private adminApi: AdminApiService,
    private cd: ChangeDetectorRef,
    private adminCreateFormService: AdminCreateFormService,
    private adminEditFormService: AdminEditFormService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAdminList();
    this.subscribeToAdminTabState();
  }

  goToAdminCreate() {
    this.setAdminTabState(this.adminTabState.CREATE);
    this.cd.markForCheck();
  }

  createAdmin(adminInfo: AdminCreateFormModel) {
    if (!adminInfo?.username?.startsWith('admin')) {
      this.toaster.error('Имя учетной записи должно начинаться с admin', 'Ошибка', {timeOut: 3000});
      return
    }
    this.adminApi.createAdmin(adminInfo).subscribe(user => {
      this.adminList.push(user);
      this.toaster.success('Пользователь создан', 'Готово', {timeOut: 3000});
      this.setAdminTabState(this.adminTabState.LIST);
      this.adminCreateFormService.adminCreateForm.reset();
      this.cd.markForCheck();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  cancelCreating() {
    this.adminCreateFormService.adminCreateForm.reset();
    this.setAdminTabState(this.adminTabState.LIST);
    this.cd.markForCheck();
  }

  goToEditAdmin(admin: User) {
    this.setAdminTabState(this.adminTabState.EDIT);
    this.setIdOfAdminOnEdit(admin?.id);
    this.adminEditFormService.form.patchValue({
      username: admin?.username,
      givenName: admin?.givenName,
      lastName: admin?.lastName,
      email: admin?.email
    });
    this.cd.markForCheck();
  }

  saveChanges(admin: any) {
    this.adminApi.editAdmin(admin?.id, admin?.form).subscribe(user => {
      this.adminList.forEach((adm, index) => {
        if (adm?.id === user?.id) {
          this.adminList[index] = user;
        }
      });
      this.toaster.success('Данные успешно изменены', 'Готово', {timeOut: 3000});
      this.setAdminTabState(this.adminTabState.LIST);
      this.cd.markForCheck();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  cancelEdit() {
    this.setAdminTabState(this.adminTabState.LIST);
    this.setIdOfAdminOnEdit(null);
    this.cd.markForCheck();
  }

  deleteAdmin(id: number) {
    this.adminApi.deleteAdmin(id).subscribe(response => {
      this.adminList = this.adminList.filter(admin => admin.id !== id);
      this.toaster.success(response?.message, 'Готово', {timeOut: 3000});
      this.cd.markForCheck();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  private getAdminList() {
    this.adminApi.getAdminList().subscribe(adminList => {
      this.adminList = adminList;
      this.cd.markForCheck();
    });
  }

  private subscribeToAdminTabState() {
    this.adminTabState$.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.currentAdminTabState = res;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
