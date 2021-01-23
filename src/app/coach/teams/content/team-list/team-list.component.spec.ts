import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import {Component} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';

@Component({
  selector: 'teams-list-control-bar',
  template: ''
})
export class ControlBarMock {

}

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListComponent, ControlBarMock ],
      imports: [RouterTestingModule, NgxsModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
