import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditProfileContentComponent} from './edit-profile-content.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditProfileFormService} from '../../forms/edit-profile.form.service';
import {ToastrModule} from 'ngx-toastr';

describe('EditProfileContentComponent', () => {
  let component: EditProfileContentComponent;
  let fixture: ComponentFixture<EditProfileContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileContentComponent ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [EditProfileFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
