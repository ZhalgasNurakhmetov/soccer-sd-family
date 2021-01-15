import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachListComponent } from './coach-list.component';
import {Component} from '@angular/core';

@Component({
  selector: 'coach-list-control-bar',
  template: ''
})
export class ControlBarMock {

}

describe('CoachListComponent', () => {
  let component: CoachListComponent;
  let fixture: ComponentFixture<CoachListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachListComponent, ControlBarMock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
