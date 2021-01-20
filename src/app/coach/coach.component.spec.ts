import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachComponent } from './coach.component';
import {Component, Input} from '@angular/core';
import {User} from '../core/models/user';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NgxsModule} from '@ngxs/store';

@Component({
  selector: 'coach-header',
  template: ''
})
export class HeaderComponentMock {
  @Input() coach: User;
}

describe('CoachComponent', () => {
  let component: CoachComponent;
  let fixture: ComponentFixture<CoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachComponent, HeaderComponentMock ],
      imports: [RouterTestingModule, HttpClientTestingModule, NgxsModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
