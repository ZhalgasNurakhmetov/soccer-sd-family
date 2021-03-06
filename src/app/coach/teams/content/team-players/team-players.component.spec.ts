import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamPlayersComponent} from './team-players.component';
import {Component, Input} from '@angular/core';
import {Player} from '../../../../core/models/user';
import {PlayerCreateFormService} from './content/player-create/forms/player-create.form.service';
import {TeamsApi} from '../../api/teams.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {NgxsModule} from '@ngxs/store';
import {PaymentFormService} from './content/player-list/forms/payment-form.service';
import {RouterTestingModule} from '@angular/router/testing';

@Component({
  selector: 'team-players-player-list',
  template: ''
})
export class PlayerListMock {
  @Input() players: Player[];
  @Input() team: string;
}

@Component({
  selector: 'team-players-player-create',
  template: ''
})
export class PlayerCreateMock {
  @Input() team: string;
  @Input() isLoading: boolean;
}

describe('TeamPlayersComponent', () => {
  let component: TeamPlayersComponent;
  let fixture: ComponentFixture<TeamPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlayersComponent, PlayerListMock, PlayerCreateMock ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), NgxsModule.forRoot(), RouterTestingModule],
      providers: [PlayerCreateFormService, TeamsApi, PaymentFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
