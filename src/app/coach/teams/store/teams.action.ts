import {Team} from '../../../core/models/team';
import {Player} from '../../../core/models/user';
import {TeamPlayersStateEnum} from '../content/team-players/enums/team-players.state';

export class SetTeams {
  static readonly type = '[TeamsState] Set Teams';
  constructor(public teams: Team[]) { }
}

export class SetPlayers {
  static readonly type = '[TeamsState] Set Players';
  constructor(public players: Player[]) { }
}

export class SetPlayerCreateIsLoading {
  static readonly type = '[TeamsState] Set Player Create Is Loading';
  constructor(public playerCreateIsLoading: boolean) { }
}

export class SetTeamPlayersState {
  static readonly type = '[TeamsState] Set Team Players State';
  constructor(public teamPlayersState: TeamPlayersStateEnum) { }
}

export class ResetState {
  static readonly type = '[TeamsState] Reset State';
}
