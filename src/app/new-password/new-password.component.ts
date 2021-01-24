import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {NewPasswordApiService} from './api/new-password-api.service';
import {NewPasswordFormService} from './forms/new-password.form.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPasswordComponent implements OnInit {

  constructor(
    private newPasswordApi: NewPasswordApiService,
    private newPasswordForm: NewPasswordFormService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

}
