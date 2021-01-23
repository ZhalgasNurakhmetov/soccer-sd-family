import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../../core/models/user';
import {EditPlayerFormService} from '../../content/team-players/content/player-list/forms/edit-player.form.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TeamsApiService} from '../../api/teams-api.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [EditPlayerFormService, TeamsApiService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPlayerComponent implements AfterViewInit{

  @Input() player: Player;
  form = this.editPlayerFormService.form;
  cities = ['Нур-Султан', 'Алматы'];
  feet = ['Правая', 'Левая'];
  teams = ['2000', '2001', '2002', '2003'];
  isLoading: boolean;
  onCancel: any;

  constructor(
    private editPlayerFormService: EditPlayerFormService,
    private cd: ChangeDetectorRef,
    public activeModal: NgbActiveModal,
    private api: TeamsApiService,
    private toaster: ToastrService
  ) { }

  ngAfterViewInit() {
    this.form.patchValue({
      weight: this.player?.weight,
      height: this.player?.height,
      activeFoot: this.player?.activeFoot,
      city: this.player?.city,
      team: this.player?.team
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

  close() {
    this.activeModal.close();
  }

  createPlayer() {
    if (!this.form.valid) {
      this.toaster.error('Заполните поля верно', 'Ошибка', {timeOut: 3000});
      return
    }
    this.api.editPlayer(this.player?.id, this.form.value).subscribe(player => {
      this.toaster.success('Данные успешно изменены', 'Готово', {timeOut: 3000});
      this.activeModal.dismiss(player);
      this.editPlayerFormService.form.reset();
    }, error => {
      this.toaster.error(error.error.message, 'Ошибка', {timeOut: 3000});
    });
  }
}
