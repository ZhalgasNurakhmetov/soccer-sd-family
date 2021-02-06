import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerCreateComponent} from './player-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlayerCreateFormService} from './forms/player-create.form.service';
import {ToastrModule} from 'ngx-toastr';
import {TeamsApiService} from '../../../../api/teams-api.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PlayerCreateComponent', () => {
  let component: PlayerCreateComponent;
  let fixture: ComponentFixture<PlayerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCreateComponent ],
      imports: [ReactiveFormsModule, NgbModule, ToastrModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers: [PlayerCreateFormService, TeamsApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
