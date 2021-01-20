import {TeamsApiService} from './api/teams-api.service';
import {TeamsGuard} from './teams-guard.service';
import {TeamsComponent} from './teams.component';
import {TeamListComponent} from './content/team-list/team-list.component';
import {TeamPlayersComponent} from './content/team-players/team-players.component';

export const teamsComponents = [TeamsComponent, TeamListComponent, TeamPlayersComponent]
export const teamsServices = [TeamsApiService, TeamsGuard]
