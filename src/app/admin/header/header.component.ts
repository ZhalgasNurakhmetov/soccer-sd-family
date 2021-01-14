import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../../core/models/user';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() admin: User;

  @Output() onGoToAdmins = new EventEmitter();
  @Output() onGoToCoaches = new EventEmitter();
  @Output() onGoToPlayers = new EventEmitter();
  @Output() onChangePassword = new EventEmitter();
  @Output() onLogout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
