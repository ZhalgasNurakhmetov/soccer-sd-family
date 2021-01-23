import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerComponent } from './add-player.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {AddPlayerFormService} from './forms/add-player.form.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {AddPlayerApiService} from './api/add-player-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddPlayerComponent', () => {
  let component: AddPlayerComponent;
  let fixture: ComponentFixture<AddPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerComponent ],
      imports: [ReactiveFormsModule, NgbDatepickerModule, RouterTestingModule, ToastrModule.forRoot(), HttpClientTestingModule],
      providers: [AddPlayerFormService, AddPlayerApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
