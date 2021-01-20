import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {Player} from '../../../../core/models/user';
import {TeamsState} from '../../store';

@Component({
  selector: 'teams-content-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamPlayersComponent implements OnInit, OnDestroy {

  @Select(TeamsState.players) players$: Observable<Player[]>;

  private unsubscribe$ = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
