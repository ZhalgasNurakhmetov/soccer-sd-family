import {AdminComponent} from './admin.component';
import {HeaderComponent} from './header/header.component';
import {AdminApi} from './api/admin.api';
import {AdminGuard} from './admin-guard.service';
import {adminTabComponents} from './content';
import {adminContentServices} from './content/admin-content';
import {coachContentServices} from './content/coach-content';

export const adminComponents = [
  AdminComponent,
  HeaderComponent,
  ...adminTabComponents
]

export const adminView = {
  adminView: AdminComponent
}

export const adminServices = [
  AdminApi,
  AdminGuard,
  ...adminContentServices,
  ...coachContentServices
]
