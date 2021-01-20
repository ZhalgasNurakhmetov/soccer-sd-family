import {Team} from '../../../core/models/team';
import {Player} from '../../../core/models/user';

export class SetTeams {
  static readonly type = '[TeamsState] Set Teams';
  constructor(public teams: Team[]) { }
}

export class SetPlayers {
  static readonly type = '[TeamsState] Set Players';
  constructor(public players: Player[]) { }
}

export class ResetState {
  static readonly type = '[TeamsState] Reset State';
}
