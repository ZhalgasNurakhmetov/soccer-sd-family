import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerModalComponent} from './player-modal.component';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

describe('PlayerModalComponent', () => {
  let component: PlayerModalComponent;
  let fixture: ComponentFixture<PlayerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerModalComponent ],
      imports: [NgbModalModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
