import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileComponent } from './edit-profile.component';
import {Component, Input} from '@angular/core';
import {User} from '../../core/models/user';
import {EditProfileApiService} from './api/edit-profile-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EditProfileFormService} from './forms/edit-profile.form.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {NgxsModule} from '@ngxs/store';

@Component({
  selector: 'edit-profile-content',
  template: ''
})
export class EditProfileContent {
  @Input() coach: User;
  @Input() isLoading: boolean;
}

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileComponent, EditProfileContent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot(), NgxsModule.forRoot()],
      providers: [EditProfileApiService, EditProfileFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
