import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminCreateComponent} from './admin-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminCreateFormService} from './forms/admin-create.form.service';
import {ToastrModule} from 'ngx-toastr';

describe('AdminCreateComponent', () => {
  let component: AdminCreateComponent;
  let fixture: ComponentFixture<AdminCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateComponent ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [AdminCreateFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
