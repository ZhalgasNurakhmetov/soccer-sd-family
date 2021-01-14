import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {StartFormService} from './forms/start.form.service';
import {AuthService} from '../core/auth/auth.service';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {User} from '../core/models/user';
import {SetAdmin} from '../admin/store/admin.action';
import {Router} from '@angular/router';
import {AppRoutes} from '../app.routes';
import {AdminRoutes} from '../admin/admin.routes';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent implements OnInit {

  loginForm = this.startFormService.form;

  @Dispatch() setAdmin = (admin: User) => new SetAdmin(admin);

  constructor(
    private authService: AuthService,
    private startFormService: StartFormService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  login() {
    this.authService.login(this.loginForm.value).subscribe(token => {
      this.authService.setToken(token);
      if (token?.user?.role === 'ADMIN') {
        this.setAdmin(token?.user);
        this.router.navigate([AppRoutes.admin]);
        this.cd.markForCheck();
      } else {
        this.router.navigate([AppRoutes.coach]);
        this.cd.markForCheck();
      }
      this.loginForm.reset();
    });
  }

  ngOnInit(): void {
  }

}
