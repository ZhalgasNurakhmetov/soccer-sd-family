import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'coach-list-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlBarComponent {

  @Output() onGoToCoachCreate = new EventEmitter();
  @Output() onGoToDeleteAllCoaches = new EventEmitter();

  constructor() { }

}
