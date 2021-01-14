import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import {Component, Input} from '@angular/core';
import {User} from '../core/models/user';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';

@Component({
  selector: 'admin-header',
  template: ''
})
export class AdminHeaderMock {
  @Input() admin: User;
}

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent, AdminHeaderMock ],
      imports: [RouterTestingModule, NgxsModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
