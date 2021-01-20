import {CoachComponent} from './coach.component';
import {HeaderComponent} from './header/header.component';
import {CoachApiService} from './api/coach-api.service';
import {CoachGuard} from './coach-guard.service';

export const coachComponents = [
  CoachComponent,
  HeaderComponent
]

export const coachServices = [
  CoachApiService,
  CoachGuard
]
