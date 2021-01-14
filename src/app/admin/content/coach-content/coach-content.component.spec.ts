import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachContentComponent } from './coach-content.component';

describe('CoachContentComponent', () => {
  let component: CoachContentComponent;
  let fixture: ComponentFixture<CoachContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachContentComponent ]
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
