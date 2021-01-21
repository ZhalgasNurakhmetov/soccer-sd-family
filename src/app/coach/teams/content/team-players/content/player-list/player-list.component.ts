import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Player} from '../../../../../../core/models/user';

@Component({
  selector: 'team-players-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {

  @Input() players: Player[];

  @Output() onOpen = new EventEmitter<Player>();
  @Output() onGoToPlayerCreate = new EventEmitter<Player>();

  constructor() { }

  ngOnInit(): void {
  }

}
