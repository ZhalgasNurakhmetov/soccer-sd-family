import {Team} from '../../../core/models/team';
import {Player} from '../../../core/models/user';

export interface TeamsStateModel {
  teams: Team[];
  players: Player[];
}
