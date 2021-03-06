import {User} from '../../core/models/user';
import {AdminTabState} from '../content/admin-content/enums/admin-tab.state.enum';
import {CoachTabState} from '../content/coach-content/enums/coach-tab.state.enum';

export class SetAdmin {
  static readonly type = '[AdminState] Set Admin';
  constructor(public admin: User) { }
}

export class SetAdminTabState {
  static readonly type = '[AdminState] Set Admin Tab State';
  constructor(public adminTabState: AdminTabState) { }
}

export class SetCoachTabState {
  static readonly type = '[AdminState] Set Coach Tab State';
  constructor(public coachTabState: CoachTabState) { }
}

export class SetAdminOnEdit {
  static readonly type = '[AdminState] Set Admin On Edit';
  constructor(public idOfAdminOnEdit: string) { }
}

export class SetAdminCreatingIsLoading {
  static readonly type = '[AdminState] Set Admin Creating Is Loading';
  constructor(public adminCreatingIsLoading: boolean) { }
}

export class SetCoachCreatingIsLoading {
  static readonly type = '[AdminState] Set Coach Creating Is Loading';
  constructor(public coachCreatingIsLoading: boolean) { }
}

export class SetCoachDeletingIsLoading {
  static readonly type = '[AdminState] Set Coach Deleting Is Loading';
  constructor(public coachDeletingIsLoading: boolean) { }
}

export class ResetState {
  static readonly type = '[AdminState] Reset State]';
}
