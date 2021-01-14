import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../../../../core/models/user';
import {AdminTabState} from '../../enums/admin-tab.state.enum';
import {AdminEditFormService} from './forms/admin-edit.form.service';
import {AdminEditFormModel} from './forms/admin-edit.form.model';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminListComponent implements OnInit {

  @Input() adminList: User[];
  @Input() currentAdminTabState: AdminTabState;
  @Input() idOfAdminOnEdit: number;
  @Output() onGoToAdminCreate = new EventEmitter();
  @Output() onDeleteAdmin = new EventEmitter<number>();
  @Output() onEditAdmin = new EventEmitter<User>();
  @Output() onCancelEdit = new EventEmitter();
  @Output() onSaveChanges = new EventEmitter();

  form = this.adminEditFormService.form;
  adminTabState = AdminTabState;

  constructor(
    private adminEditFormService: AdminEditFormService
  ) { }

  ngOnInit(): void {
  }

}
