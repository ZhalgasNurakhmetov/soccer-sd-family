import {TeamsApiService} from './api/teams-api.service';
import {TeamsGuard} from './teams-guard.service';
import {TeamsComponent} from './teams.component';
import {teamListComponents} from './content/team-list';
import {teamPlayersComponents} from './content/team-players';
import {PlayerModalComponent} from './modals/player-modal/player-modal.component';
import {PlayerCreateFormService} from './content/team-players/content/player-create/forms/player-create.form.service';

export const teamsComponents = [TeamsComponent, ...teamListComponents, ...teamPlayersComponents, PlayerModalComponent];

export const teamsServices = [TeamsApiService, TeamsGuard, PlayerCreateFormService];
