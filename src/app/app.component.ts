import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/auth/auth.service';
import {Router} from '@angular/router';
import {AppRoutes} from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  initializeApp() {
    this.authService.authenticationState.subscribe(state => {
      if (state) {
        if (this.authService.getToken().user?.role === 'ADMIN') {
          this.router.navigate([AppRoutes.admin]);
        } else {
          this.router.navigate([AppRoutes.coach]);
        }
      } else {
        this.router.navigate([AppRoutes.start])
      }
    })
  }

  ngOnInit() {
    this.initializeApp();
  }
}
