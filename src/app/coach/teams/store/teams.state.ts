import {TeamsStateModel} from './teams.state.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Team} from '../../../core/models/team';
import {ResetState, SetPlayerCreateIsLoading, SetPlayers, SetTeamPlayersState, SetTeams} from './teams.action';
import {Player} from '../../../core/models/user';
import {TeamPlayersStateEnum} from '../content/team-players/enums/team-players.state';

const defaultTeamsState = (): TeamsStateModel => {
  return {
    teams: [],
    players: [],
    playerCreateIsLoading: false,
    team: null,
    teamPlayersState: TeamPlayersStateEnum.LIST
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

  @Selector()
  static playerCreateIsLoading(state: TeamsStateModel): boolean {
    return state.playerCreateIsLoading;
  }

  @Selector()
  static teamPlayersState(state: TeamsStateModel): TeamPlayersStateEnum {
    return state.teamPlayersState;
  }

  @Selector()
  static team(state: TeamsStateModel): string {
    return state.team;
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
      players,
      team: players[0].team
    });
  }

  @Action(SetTeamPlayersState)
  setTeamPlayersState({patchState}: StateContext<TeamsStateModel>, {teamPlayersState}: SetTeamPlayersState) {
    patchState({
      teamPlayersState
    });
  }

  @Action(SetPlayerCreateIsLoading)
  setPlayerCreateIsLoading({patchState}: StateContext<TeamsStateModel>, {playerCreateIsLoading}: SetPlayerCreateIsLoading) {
    patchState({
      playerCreateIsLoading
    });
  }

  @Action(ResetState)
  resetState({setState}: StateContext<TeamsStateModel>) {
    setState(defaultTeamsState());
  }
}
