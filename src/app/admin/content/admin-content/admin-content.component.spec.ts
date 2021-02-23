import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminContentComponent} from './admin-content.component';
import {Component, Input} from '@angular/core';
import {User} from '../../../core/models/user';
import {AdminTabState} from './enums/admin-tab.state.enum';
import {AdminApiService} from '../../api/admin.api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AdminCreateFormService} from './content/admin-create/forms/admin-create.form.service';
import {AdminEditFormService} from './content/admin-list/forms/admin-edit.form.service';
import {NgxsModule} from '@ngxs/store';
import {ToastrModule} from 'ngx-toastr';

@Component({
  selector: 'admin-list',
  template: ''
})
export class AdminListMock {
  @Input() adminList: User[];
  @Input() currentAdminTabState: AdminTabState;
  @Input() idOfAdminOnEdit: string;
}

@Component({
  selector: 'admin-create',
  template: ''
})
export class AdminCreateMock {

  @Input() isLoading: boolean;

}

describe('AdminContentComponent', () => {
  let component: AdminContentComponent;
  let fixture: ComponentFixture<AdminContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentComponent, AdminListMock, AdminCreateMock ],
      imports: [HttpClientTestingModule, NgxsModule.forRoot(), ToastrModule.forRoot()],
      providers: [AdminApiService, AdminCreateFormService, AdminEditFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
