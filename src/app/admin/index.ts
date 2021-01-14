import {AdminComponent} from './admin.component';
import {HeaderComponent} from './header/header.component';
import {AdminApiService} from './api/admin.api.service';
import {AdminGuard} from './admin-guard.service';
import {adminTabComponents} from './content';
import {adminContentServices} from './content/admin-content';

export const adminComponents = [
  AdminComponent,
  HeaderComponent,
  ...adminTabComponents
]

export const adminView = {
  adminView: AdminComponent
}

export const adminServices = [
  AdminApiService,
  AdminGuard,
  ...adminContentServices
]
