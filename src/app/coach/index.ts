import {CoachComponent} from './coach.component';
import {HeaderComponent} from './header/header.component';
import {CoachApi} from './api/coach.api';
import {CoachGuard} from './coach-guard.service';

export const coachComponents = [
  CoachComponent,
  HeaderComponent
]

export const coachServices = [
  CoachApi,
  CoachGuard
]
