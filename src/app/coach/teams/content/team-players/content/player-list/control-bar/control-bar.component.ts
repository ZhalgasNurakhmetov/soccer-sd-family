import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'player-list-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlBarComponent {
  @Input() team: string;
  @Output() onGoToPlayerCreate = new EventEmitter();

  constructor() { }


}
