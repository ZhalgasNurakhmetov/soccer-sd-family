import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Player} from '../../../../../../core/models/user';
import {PaymentFormService} from './forms/payment-form.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'team-players-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {

  @Input() players: Player[];
  @Input() team: string;

  @Output() onOpen = new EventEmitter<Player>();
  @Output() onOpenEdit = new EventEmitter<Player>();
  @Output() onGoToPlayerCreate = new EventEmitter<Player>();
  @Output() onMakePayment = new EventEmitter();
  @Output() onOpenDelete = new EventEmitter<Player>();

  form = this.paymentFormService.form;

  constructor(
    private paymentFormService: PaymentFormService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  makePayment(player: number) {
    this.form.patchValue({
      date: new Date().toISOString()
    });
    if (!this.form.valid) {
      this.toaster.error('Введите сумму', 'Ошибка', {timeOut: 3000});
      return
    }
    this.onMakePayment.emit({player, form: this.form.value});
  }

}
