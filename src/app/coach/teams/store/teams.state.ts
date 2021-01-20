import {TeamsStateModel} from './teams.state.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Team} from '../../../core/models/team';
import {ResetState, SetPlayers, SetTeams} from './teams.action';
import {Player} from '../../../core/models/user';

const defaultTeamsState = (): TeamsStateModel => {
  return {
    teams: [],
    players: []
  }
}

@State<TeamsStateModel>({
  name: 'teams',
  defaults: defaultTeamsState()
})
@Injectable()
export class TeamsState {

  @Selector()
  static teams(state: TeamsStateModel): Team[] {
    return state.teams;
  }

  @Selector()
  static players(state: TeamsStateModel): Player[] {
    return state.players;
  }

  @Action(SetTeams)
  setTeams({patchState}: StateContext<TeamsStateModel>, {teams}: SetTeams) {
    patchState({
      teams
    });
  }

  @Action(SetPlayers)
  setPlayers({patchState}: StateContext<TeamsStateModel>, {players}: SetPlayers) {
    patchState({
      players
    });
  }

  @Action(ResetState)
  resetState({setState}: StateContext<TeamsStateModel>) {
    setState(defaultTeamsState());
  }
}
