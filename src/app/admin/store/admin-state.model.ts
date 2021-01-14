import {User} from '../../core/models/user';
import {AdminTabState} from '../content/admin-content/enums/admin-tab.state.enum';

export interface AdminStateModel {
  admin: User;
  adminTabState: AdminTabState;
  idOfAdminOnEdit: number;
}
