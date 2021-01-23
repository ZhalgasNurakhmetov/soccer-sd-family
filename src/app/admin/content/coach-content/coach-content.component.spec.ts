import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoachContentComponent} from './coach-content.component';
import {Component, Input} from '@angular/core';
import {User} from '../../../core/models/user';
import {AdminApiService} from '../../api/admin.api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {CoachCreateFormService} from './content/coach-create/forms/coach-create.form.service';
import {NgxsModule} from '@ngxs/store';

@Component({
  selector: 'coach-list',
  template: ''
})
export class CoachListMock {
  @Input() coachList: User[];
  @Input() isLoading: boolean;
}

@Component({
  selector: 'coach-create',
  template: ''
})
export class CoachCreateMock {
  @Input() isLoading: boolean;
}

describe('CoachContentComponent', () => {
  let component: CoachContentComponent;
  let fixture: ComponentFixture<CoachContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachContentComponent, CoachListMock, CoachCreateMock ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), NgxsModule.forRoot()],
      providers: [AdminApiService, CoachCreateFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
