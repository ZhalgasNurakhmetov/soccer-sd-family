import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponent } from './player-list.component';
import {Component, Input} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {PaymentFormService} from './forms/payment-form.service';
import {ToastrModule} from 'ngx-toastr';

@Component({
  selector: 'player-list-control-bar',
  template: ''
})
export class ControlBarMock {
  @Input() team: string;
}

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListComponent, ControlBarMock ],
      imports: [ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [PaymentFormService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
