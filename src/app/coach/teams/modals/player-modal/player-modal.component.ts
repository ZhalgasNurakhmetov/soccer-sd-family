import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Player} from '../../../../core/models/user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerModalComponent {

  @Input() player: Player;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

}
