import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoachCreateComponent} from './coach-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoachCreateFormService} from './forms/coach-create.form.service';
import {ToastrModule} from 'ngx-toastr';

describe('CoachCreateComponent', () => {
  let component: CoachCreateComponent;
  let fixture: ComponentFixture<CoachCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCreateComponent ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [CoachCreateFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
