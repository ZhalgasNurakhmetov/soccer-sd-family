import {ChangeDetectionStrategy, Component, Input, OnDestroy} from '@angular/core';
import {Player} from '../../../../core/models/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TeamsApi} from '../../api/teams.api';
import {ToastrService} from 'ngx-toastr';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [TeamsApi],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteComponent implements OnDestroy{

  @Input() player: Player;

  private unsubscribe$ = new Subject();

  constructor(
    public activeModal: NgbActiveModal,
    private teamsApi: TeamsApi,
    private toaster: ToastrService
  ) { }

  delete() {
    this.teamsApi.deletePlayer(this.player?.id).pipe(takeUntil(this.unsubscribe$)).subscribe(player => {
      this.toaster.success(`Игрок ${player?.givenName} ${player?.lastName} удален`, 'Готово', {timeOut: 3000});
      this.activeModal.dismiss(player);
    }, error => {
      this.toaster.error(error.error.message, 'Готово', {timeOut: 3000});
      this.close();
    })
  }

  close() {
    this.activeModal.close();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
