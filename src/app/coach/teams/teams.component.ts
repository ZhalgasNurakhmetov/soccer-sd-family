import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'coach-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent {

  constructor() { }

}
