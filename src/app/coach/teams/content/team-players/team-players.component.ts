import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {Player} from '../../../../core/models/user';
import {SetPlayerCreateIsLoading, SetPlayers, SetTeamPlayersState, TeamsState} from '../../store';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PlayerModalComponent} from '../../modals/player-modal/player-modal.component';
import {TeamPlayersStateEnum} from './enums/team-players.state';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {PlayerCreateFormService} from './content/player-create/forms/player-create.form.service';
import {TeamsApi} from '../../api/teams.api';
import {PlayerCreateModel} from './content/player-create/forms/player-create.form.model';
import {finalize, takeUntil} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {PaymentFormService} from './content/player-list/forms/payment-form.service';
import {EditPlayerComponent} from '../../modals/edit-player/edit-player.component';
import {DeleteComponent} from '../../modals/delete/delete.component';
import {Router} from '@angular/router';
import {AppRoutes} from '../../../../app.routes';
import {CoachRoutes} from '../../../coach.routes';

@Component({
  selector: 'teams-content-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamPlayersComponent implements OnInit, OnDestroy{

  @Select(TeamsState.players) players$: Observable<Player[]>;
  @Select(TeamsState.teamPlayersState) teamPlayersState$: Observable<TeamPlayersStateEnum>;
  @Select(TeamsState.team) team$: Observable<string>;
  @Select(TeamsState.playerCreateIsLoading) playerCreateIsLoading$: Observable<boolean>;

  players: Player[];

  teamPlayersState = TeamPlayersStateEnum;

  private unsubscribe$ = new Subject();

  @Dispatch() setTeamPlayersState = (teamPlayersState: TeamPlayersStateEnum) => new SetTeamPlayersState(teamPlayersState);
  @Dispatch() setPlayerCreateIsLoading = (playerCreateIsLoading: boolean) => new SetPlayerCreateIsLoading(playerCreateIsLoading);
  @Dispatch() setPlayers = (players: Player[]) => new SetPlayers(players);

  constructor(
    private cd: ChangeDetectorRef,
    private modalService: NgbModal,
    private playerCreateFormService: PlayerCreateFormService,
    private paymentFormService: PaymentFormService,
    private teamsApi: TeamsApi,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToPlayers();
  }

  openPlayerModal(player: Player) {
    const modalRef = this.modalService.open(PlayerModalComponent);
    modalRef.componentInstance.player = player;
  }

  openEditModal(player: Player) {
    const modalRef = this.modalService.open(EditPlayerComponent, {size: 'lg'});
    modalRef.componentInstance.player = player;
    modalRef.dismissed.subscribe(response => {
      this.players.forEach((pl, index) => {
        if (pl?.id === response?.id) {
          this.players[index] = response;
        }
      });
      this.cd.markForCheck();
    })
  }

  openDeleteModal(player: Player) {
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.player = player;
    modalRef.dismissed.subscribe(() => {
      if (this.players.length > 1) {
        this.players = this.players.filter(pl => pl?.id !== player?.id);
        this.setPlayers([...this.players]);
        this.cd.markForCheck();
      } else {
        this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
        this.cd.markForCheck();
      }

    })
  }

  goToPlayerCreate() {
    this.setTeamPlayersState(this.teamPlayersState.CREATE);
  }

  createPlayer(player: PlayerCreateModel) {
    this.setPlayerCreateIsLoading(true);
    this.teamsApi.createPlayer(player)
      .pipe(
        finalize(() => {
          this.setPlayerCreateIsLoading(false);
          this.cd.markForCheck();
        }),
        takeUntil(this.unsubscribe$)
      ).subscribe(newPlayer => {
        this.players.push(newPlayer);
      this.toaster.success('Игрок успешно добавлен', 'Готово', {timeOut: 3000});
      this.setTeamPlayersState(this.teamPlayersState.LIST);
      this.playerCreateFormService.form.reset();
      this.playerCreateFormService.player.reset();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    })
  }

  onCancel() {
    this.playerCreateFormService.form.reset();
    this.playerCreateFormService.player.reset();
    this.setTeamPlayersState(this.teamPlayersState.LIST);
    this.cd.markForCheck();
  }

  makePayment({player: id, form: formValue}) {
    this.teamsApi.makePayment(id, formValue).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.paymentFormService.form.reset();
      this.toaster.success(`Оплата записана`, 'Готово', {timeOut: 3000});
    }, error => {
      this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    })
  }

  private subscribeToPlayers() {
    this.players$.pipe(takeUntil(this.unsubscribe$)).subscribe(players => {
      this.players = players;
      this.cd.markForCheck();
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
