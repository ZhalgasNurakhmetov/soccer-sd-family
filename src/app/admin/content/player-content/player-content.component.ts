import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {AdminApi} from '../../api/admin.api';
import {ToastrService} from 'ngx-toastr';
import {Player} from '../../../core/models/user';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'player-content',
  templateUrl: './player-content.component.html',
  styleUrls: ['./player-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerContentComponent implements OnInit, OnDestroy {

  playerList: Player[] = [];

  private unsubscribe$ = new Subject();

  constructor(private adminApi: AdminApi, private toaster: ToastrService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPlayerList();
  }

  deleteAllPlayers() {
    if (!this.playerList || this.playerList.length === 0) {
      this.toaster.show('Нет данных для удаления', 'Внимание', {timeOut: 3000});
      return
    }
    this.adminApi.deleteAllPlayers()
      .pipe(takeUntil(this.unsubscribe$)).subscribe(response => {
      this.playerList = [];
      this.toaster.success(response?.message, 'Готово', {timeOut: 3000});
      this.cd.markForCheck();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  private getPlayerList() {
    this.adminApi.getPlayerList().pipe(takeUntil(this.unsubscribe$)).subscribe(playerList => {
      this.playerList = playerList;
      this.cd.markForCheck()
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
