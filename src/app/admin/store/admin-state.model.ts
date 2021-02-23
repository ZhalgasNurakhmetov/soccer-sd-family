import {User} from '../../core/models/user';
import {AdminTabState} from '../content/admin-content/enums/admin-tab.state.enum';
import {CoachTabState} from '../content/coach-content/enums/coach-tab.state.enum';

export interface AdminStateModel {
  admin: User;
  adminTabState: AdminTabState;
  coachTabState: CoachTabState;
  idOfAdminOnEdit: string;
  adminCreatingIsLoading: boolean;
  coachCreatingIsLoading: boolean;
  coachDeletingIsLoading: boolean
}
