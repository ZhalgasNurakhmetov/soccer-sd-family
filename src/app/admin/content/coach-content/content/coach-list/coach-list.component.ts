import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../../../core/models/user';

@Component({
  selector: 'coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachListComponent {

  @Input() coachList: User[];
  @Output() onGoToCoachCreate = new EventEmitter();
  @Output() onDeleteCoach = new EventEmitter<number>();
  @Output() onDeleteAllCoaches = new EventEmitter();

  constructor() { }
}
