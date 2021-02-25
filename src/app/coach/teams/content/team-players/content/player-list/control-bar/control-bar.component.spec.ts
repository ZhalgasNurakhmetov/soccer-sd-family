import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBarComponent } from './control-bar.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('ControlBarComponent', () => {
  let component: ControlBarComponent;
  let fixture: ComponentFixture<ControlBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlBarComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
