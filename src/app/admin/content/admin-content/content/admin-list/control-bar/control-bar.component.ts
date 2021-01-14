import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {AdminTabState} from '../../../enums/admin-tab.state.enum';

@Component({
  selector: 'admin-list-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlBarComponent implements OnInit {

  @Output() onGoToAdminCreate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
