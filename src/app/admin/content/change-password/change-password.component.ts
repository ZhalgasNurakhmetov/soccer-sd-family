import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {ChangePasswordFormService} from './forms/change-password.form.service';
import {Router} from '@angular/router';
import {AppRoutes} from '../../../app.routes';
import {AdminRoutes} from '../../admin.routes';
import {AdminApiService} from '../../api/admin.api.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'admin-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent implements OnInit {

  form = this.changePasswordFormService.form;

  constructor(
    private changePasswordFormService: ChangePasswordFormService,
    private router: Router,
    private adminApiService: AdminApiService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  changePassword() {
    this.adminApiService.changePassword(this.form?.value).subscribe(response => {
      this.toaster.success(response?.message, 'Готово', {timeOut: 3000});
      this.router.navigate([AppRoutes.admin, AdminRoutes.admin]);
      this.changePasswordFormService.form.reset();
    }, error => {
      this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    });
  }

  cancel() {
    this.router.navigate([AppRoutes.admin, AdminRoutes.admin]);
    this.changePasswordFormService.form.reset();
  }
}
