import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../../../core/models/user';
import {AdminTabState} from '../../enums/admin-tab.state.enum';
import {AdminEditFormService} from './forms/admin-edit.form.service';

@Component({
  selector: 'admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminListComponent {

  @Input() adminList: User[];
  @Input() currentAdminTabState: AdminTabState;
  @Input() idOfAdminOnEdit: string;
  @Output() onGoToAdminCreate = new EventEmitter();
  @Output() onDeleteAdmin = new EventEmitter<string>();
  @Output() onEditAdmin = new EventEmitter<User>();
  @Output() onCancelEdit = new EventEmitter();
  @Output() onSaveChanges = new EventEmitter();

  form = this.adminEditFormService.form;
  adminTabState = AdminTabState;

  constructor(
    private adminEditFormService: AdminEditFormService
  ) { }

}
