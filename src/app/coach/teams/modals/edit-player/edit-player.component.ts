import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {Player} from '../../../../core/models/user';
import {EditPlayerFormService} from '../../content/team-players/content/player-list/forms/edit-player.form.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TeamsApi} from '../../api/teams.api';
import {ToastrService} from 'ngx-toastr';
import {EntityListService} from '../../../../services/entity-list.service';
import {finalize, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [EditPlayerFormService, TeamsApi],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPlayerComponent implements AfterViewInit, OnDestroy{

  @Input() player: Player;
  form = this.editPlayerFormService.form;
  cities = this.entities.cities;
  feet = this.entities.feet;
  teams = this.entities.teams;
  positions = this.entities.positions;
  isLoading: boolean;
  onCancel: any;

  private unsubscribe$ = new Subject();

  constructor(
    private editPlayerFormService: EditPlayerFormService,
    private cd: ChangeDetectorRef,
    public activeModal: NgbActiveModal,
    private teamsApi: TeamsApi,
    private toaster: ToastrService,
    private entities: EntityListService
  ) { }

  handleInputChange(event: Event) {
    const file: File = (<HTMLInputElement>event.target).files[0];
    this.processFileUpload(file);
  }

  processFileUpload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    this.teamsApi.uploadPhoto(formData, this.player?.id)
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => {
          this.cd.markForCheck();
        })
      )
      .subscribe(player => {
        this.player = player;
        this.toaster.success('Фото успешно добавлено', 'Готово', {timeOut: 3000});
      }, error => {
        this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
      });
  }

  ngAfterViewInit() {
    this.form.patchValue({
      weight: this.player?.weight,
      height: this.player?.height,
      activeFoot: this.player?.activeFoot,
      city: this.player?.city,
      team: this.player?.team,
      photo: this.player?.photo,
      position: this.player?.position
    });
    this.cd.detectChanges();
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

  close() {
    this.activeModal.close();
    this.editPlayerFormService.form.reset();
  }

  editPlayer() {
    if (!this.form.valid) {
      this.toaster.error('Заполните поля верно', 'Ошибка', {timeOut: 3000});
      return
    }
    this.teamsApi.editPlayer(this.player?.id, this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(player => {
      this.toaster.success('Данные успешно изменены', 'Готово', {timeOut: 3000});
      this.activeModal.dismiss(player);
      this.editPlayerFormService.form.reset();
    }, error => {
      this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    });
  }

  removePhoto() {
    this.teamsApi.deletePhoto(this.player?.id)
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => {
          this.cd.markForCheck();
        })
      )
      .subscribe(player => {
        this.player = player;
        this.toaster.success('Фото успешно удалено', 'Готово', {timeOut: 3000});
      }, error => {
        this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
