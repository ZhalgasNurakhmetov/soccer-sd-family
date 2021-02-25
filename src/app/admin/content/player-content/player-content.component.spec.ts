import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerContentComponent} from './player-content.component';
import {Component} from '@angular/core';
import {AdminApi} from '../../api/admin.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';

@Component({
  selector: 'player-list-control-bar',
  template: ''
})
export class ControlBarMock {

}

describe('PlayerContentComponent', () => {
  let component: PlayerContentComponent;
  let fixture: ComponentFixture<PlayerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerContentComponent, ControlBarMock ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [AdminApi]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
