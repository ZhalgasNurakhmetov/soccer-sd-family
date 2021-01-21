import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'teams-list-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlBarComponent {
  @Output() onGoToTeamCreate = new EventEmitter();

  constructor() { }

}
