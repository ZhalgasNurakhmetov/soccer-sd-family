import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {Team} from '../../../../core/models/team';
import {TeamsState} from '../../store';

@Component({
  selector: 'teams-content-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent implements OnInit, OnDestroy {

  @Select(TeamsState.teams) teams$: Observable<Team[]>;

  private unsubscribe$ = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
