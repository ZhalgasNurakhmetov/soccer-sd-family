import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {AddPlayerFormService} from './forms/add-player.form.service';
import {Router} from '@angular/router';
import {AppRoutes} from '../../app.routes';
import {CoachRoutes} from '../coach.routes';
import {ToastrService} from 'ngx-toastr';
import {AddPlayerApiService} from './api/add-player-api.service';
import {finalize, takeUntil} from 'rxjs/operators';
import {EntityListService} from '../../services/entity-list.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPlayerComponent {

  form = this.addPlayerFormService.form;
  player = this.addPlayerFormService.player;
  cities = this.entities.cities;
  feet = this.entities.feet;
  teams = this.entities.teams;
  positions = this.entities.positions;
  isLoading: boolean;
  loadingFiles: boolean;

  private cancel$ = new Subject();

  constructor(
    private addPlayerFormService: AddPlayerFormService,
    private router: Router,
    private toaster: ToastrService,
    private addPlayerApi: AddPlayerApiService,
    private cd: ChangeDetectorRef,
    private entities: EntityListService
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
    this.isLoading = true;
    const date = new Date(this.form?.controls?.birthdate?.value?.year, this.form?.controls?.birthdate?.value?.month - 1, this.form?.controls?.birthdate?.value?.day + 1)
    this.player.patchValue({
      ...this.form?.value,
      birthdate: date.toISOString(),
      photo: this.imageSrc
    });
    if(!this.player.valid) {
      this.toaster.error('Заполните все обязательные поля', 'Ошибка', {timeOut: 3000});
      return
    }
    this.addPlayerApi.createPlayer(this.player.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cd.markForCheck();
        })
      ).subscribe(() => {
      this.toaster.success('Игрок успешно добавлен', 'Готово', {timeOut: 3000});
      this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
      this.addPlayerFormService.player.reset();
      this.addPlayerFormService.form.reset();
    }, error => {
      this.toaster.error(error?.error?.message, 'Ошибка', {timeOut: 3000});
    })
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

  setTeam(team: string) {
    this.form.patchValue({
      team
    });
  }

  setPosition(position: string) {
    this.form.patchValue({
      position
    });
  }

  cancel() {
    this.router.navigate([AppRoutes.coach, CoachRoutes.teams]);
    this.addPlayerFormService.form.reset();
    this.addPlayerFormService.form.reset();
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
    this.addPlayerApi.uploadFile(formData)
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
