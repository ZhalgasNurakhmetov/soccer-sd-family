import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListComponent } from './admin-list.component';
import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminEditFormService} from './forms/admin-edit.form.service';

@Component({
  selector: 'admin-list-control-bar',
  template: ''
})
export class AdminListControlBarMock {

}

describe('AdminListComponent', () => {
  let component: AdminListComponent;
  let fixture: ComponentFixture<AdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListComponent, AdminListControlBarMock ],
      imports: [ReactiveFormsModule],
      providers: [AdminEditFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
