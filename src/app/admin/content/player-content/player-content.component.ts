import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {AdminApiService} from '../../api/admin.api.service';
import {ToastrService} from 'ngx-toastr';
import {Player} from '../../../core/models/user';

@Component({
  selector: 'player-content',
  templateUrl: './player-content.component.html',
  styleUrls: ['./player-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerContentComponent implements OnInit {

  playerList: Player[] = [];

  constructor(private adminApi: AdminApiService, private toaster: ToastrService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPlayerList();
  }

  deleteAllPlayers() {
    if (!this.playerList || this.playerList.length === 0) {
      this.toaster.show('Нет данных для удаления', 'Внимание', {timeOut: 3000});
      return
    }
    this.adminApi.deleteAllPlayers().subscribe(response => {
      this.playerList = [];
      this.toaster.success(response?.message, 'Готово', {timeOut: 3000});
      this.cd.markForCheck();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    });
  }

  private getPlayerList() {
    this.adminApi.getPlayerList().subscribe(playerList => {
      this.playerList = playerList;
      this.cd.markForCheck()
    });
  }

}
