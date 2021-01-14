import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChangePasswordFormService} from './forms/change-password.form.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AdminApiService} from '../../api/admin.api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [ChangePasswordFormService, AdminApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
