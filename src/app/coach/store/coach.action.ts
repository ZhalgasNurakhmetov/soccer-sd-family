import {User} from '../../core/models/user';

export class SetCoach {
  static readonly type = '[CoachState] Set Coach';
  constructor(public coach: User) { }
}

export class ResetState {
  static readonly type = '[CoachState] Reset State';
}
