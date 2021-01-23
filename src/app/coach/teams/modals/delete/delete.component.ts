import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Player} from '../../../../core/models/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TeamsApiService} from '../../api/teams-api.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [TeamsApiService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteComponent implements OnInit {

  @Input() player: Player;

  constructor(
    public activeModal: NgbActiveModal,
    private api: TeamsApiService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.api.deletePlayer(this.player?.id).subscribe(player => {
      this.toaster.success(`Игрок ${player?.givenName} ${player?.lastName} удален`, 'Готово', {timeOut: 3000});
      this.activeModal.dismiss(player);
    }, error => {
      this.toaster.error(error.error.message, 'Готово', {timeOut: 3000});
    })
  }

  close() {
    this.activeModal.close();
  }

}
