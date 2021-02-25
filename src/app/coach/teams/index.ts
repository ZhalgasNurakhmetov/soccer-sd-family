import {TeamsApi} from './api/teams.api';
import {TeamsGuard} from './teams-guard.service';
import {TeamsComponent} from './teams.component';
import {teamListComponents} from './content/team-list';
import {teamPlayersComponents} from './content/team-players';
import {PlayerModalComponent} from './modals/player-modal/player-modal.component';
import {PlayerCreateFormService} from './content/team-players/content/player-create/forms/player-create.form.service';
import {PaymentFormService} from './content/team-players/content/player-list/forms/payment-form.service';
import {EditPlayerComponent} from './modals/edit-player/edit-player.component';
import {EditPlayerFormService} from './content/team-players/content/player-list/forms/edit-player.form.service';
import {DeleteComponent} from './modals/delete/delete.component';

export const teamsComponents = [TeamsComponent, ...teamListComponents, ...teamPlayersComponents, PlayerModalComponent, EditPlayerComponent, DeleteComponent];

export const teamsServices = [TeamsApi, TeamsGuard, PlayerCreateFormService, PaymentFormService, EditPlayerFormService];
