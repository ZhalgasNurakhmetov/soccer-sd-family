import {Team} from '../../../core/models/team';
import {Player} from '../../../core/models/user';
import {TeamPlayersStateEnum} from '../content/team-players/enums/team-players.state';

export interface TeamsStateModel {
  teams: Team[];
  players: Player[];
  team: string;
  playerCreateIsLoading: boolean;
  teamPlayersState: TeamPlayersStateEnum;
}
