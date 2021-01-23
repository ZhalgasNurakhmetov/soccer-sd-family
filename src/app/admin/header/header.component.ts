import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../core/models/user';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() admin: User;

  @Output() onGoToAdmins = new EventEmitter();
  @Output() onGoToCoaches = new EventEmitter();
  @Output() onGoToPlayers = new EventEmitter();
  @Output() onChangePassword = new EventEmitter();
  @Output() onLogout = new EventEmitter();

  constructor() { }

}
