import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../core/models/user';

@Component({
  selector: 'coach-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() coach: User;

  @Output() onGoToTeams = new EventEmitter();
  @Output() onGoToEdit = new EventEmitter();
  @Output() onGoToChangePassword = new EventEmitter();
  @Output() onGoToPayment = new EventEmitter();
  @Output() onLogout = new EventEmitter();
  @Output() onGoToMain = new EventEmitter();
  @Output() onGoToNotification = new EventEmitter();

  constructor() { }

}
