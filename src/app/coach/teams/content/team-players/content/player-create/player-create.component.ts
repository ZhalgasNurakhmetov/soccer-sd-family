import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayerCreateFormService} from './forms/player-create.form.service';
import {ToastrService} from 'ngx-toastr';
import {PlayerCreateModel} from './forms/player-create.form.model';

@Component({
  selector: 'team-players-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerCreateComponent {

  @Input() team: string;
  @Input() isLoading: boolean;

  @Output() onCreatePlayer = new EventEmitter<PlayerCreateModel>();
  @Output() onCancel = new EventEmitter();

  form = this.playerCreateFormService.form;
  player = this.playerCreateFormService.player;
  cities = ['Нур-Султан', 'Алматы'];
  feet = ['Правая', 'Левая'];
  positions = ['Вратарь', 'Защитник', 'Полузащитник', 'Нападающий'];

  constructor(
    private playerCreateFormService: PlayerCreateFormService,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef
  ) { }

  imageSrc = '';

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    this.form.patchValue({
      photo: this.imageSrc
    });
    this.cd.markForCheck();
  }

  createPlayer() {
    const date = new Date(this.form?.controls?.birthdate?.value?.year, this.form?.controls?.birthdate?.value?.month - 1, this.form?.controls?.birthdate?.value?.day + 1)
    this.player.patchValue({
      ...this.form?.value,
      birthdate: date.toISOString(),
      team: this.team,
      photo: this.imageSrc
    });
    if(!this.player.valid) {
      this.toaster.error('Заполните все обязательные поля', 'Ошибка', {timeOut: 3000});
      return
    }
    this.onCreatePlayer.emit(this.player.value);
  }

  setCity(city: string) {
    this.form.patchValue({
      city
    });
  }

  setFoot(foot: string) {
    this.form.patchValue({
      activeFoot: foot
    });
  }

  setPosition(position: string) {
    this.form.patchValue({
      position
    });
  }
}
