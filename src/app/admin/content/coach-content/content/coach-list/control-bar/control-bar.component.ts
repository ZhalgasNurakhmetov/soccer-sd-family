import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'coach-list-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlBarComponent {

  @Input() isLoading: boolean;

  @Output() onGoToCoachCreate = new EventEmitter();
  @Output() onGoToDeleteAllCoaches = new EventEmitter();

  constructor() { }

}
