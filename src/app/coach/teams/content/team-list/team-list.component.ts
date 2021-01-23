import {Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {Team} from '../../../../core/models/team';
import {SetPlayers, SetTeamPlayersState, TeamsState} from '../../store';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AppRoutes} from '../../../../app.routes';
import {CoachRoutes} from '../../../coach.routes';
import {TeamsRoutes} from '../../teams.routes';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {Player} from '../../../../core/models/user';
import {TeamPlayersStateEnum} from '../team-players/enums/team-players.state';

@Component({
  selector: 'teams-content-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamListComponent implements OnInit, OnDestroy {

  @Select(TeamsState.teams) teams$: Observable<Team[]>;

  teams: Team[];
  teamPlayersStateEnum = TeamPlayersStateEnum;

  private unsubscribe$ = new Subject();

  @Dispatch() setPlayers = (players: Player[]) => new SetPlayers(players);
  @Dispatch() setTeamPlayersState = (teamPlayersState: TeamPlayersStateEnum) => new SetTeamPlayersState(teamPlayersState);

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToTeams();
  }

  goToTeam(players: Player[]) {
    this.setPlayers(players);
    this.setTeamPlayersState(this.teamPlayersStateEnum.LIST);
    this.router.navigate([AppRoutes.coach, CoachRoutes.teams, TeamsRoutes.players]);
  }

  goToPlayerCreate() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.addPlayer]);
  }

  private subscribeToTeams() {
    this.teams$.pipe(takeUntil(this.unsubscribe$)).subscribe(teams => {
      this.teams = teams;
      this.cd.markForCheck();
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
