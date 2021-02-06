import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayerCreateFormService} from './forms/player-create.form.service';
import {ToastrService} from 'ngx-toastr';
import {PlayerCreateModel} from './forms/player-create.form.model';
import {EntityListService} from '../../../../../../services/entity-list.service';
import {finalize, takeUntil} from 'rxjs/operators';
import {AppRoutes} from '../../../../../../app.routes';
import {CoachRoutes} from '../../../../../coach.routes';
import {Subject} from 'rxjs';
import {TeamsApiService} from '../../../../api/teams-api.service';
import {Router} from '@angular/router';

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
  cities = this.entities.cities;
  feet = this.entities.feet;
  positions = this.entities.positions;
  loadingFiles: boolean;

  private cancel$ = new Subject();

  constructor(
    private playerCreateFormService: PlayerCreateFormService,
    private toaster: ToastrService,
    private cd: ChangeDetectorRef,
    private entities: EntityListService,
    private playerCreateApi: TeamsApiService,
    private router: Router
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

  uploadFile(file: File) {
    this.loadingFiles = true;
    this.processFileUpload(file);
  }

  chooseByInput(event: Event) {
    this.loadingFiles = true;
    const file: File = (<HTMLInputElement>event.target).files[0];
    this.processFileUpload(file);
  }

  processFileUpload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    this.playerCreateApi.uploadFile(formData, this.team)
      .pipe(
        takeUntil(this.cancel$),
        finalize(() => {
          this.loadingFiles = false;
          this.cd.markForCheck();
        })
      )
      .subscribe(response => {
        this.toaster.success(response?.message, 'Готово', {timeOut: 3000});
        this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
      }, error => {
        this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
      });
  }

  cancelUploadFile() {
    this.cancel$.next();
    this.cancel$.complete();
    this.loadingFiles = false;
    this.toaster.show('Отмена по вашей инициативе', 'Отмена', {timeOut: 3000});
    this.cd.markForCheck();
  }
}
