import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamsRoutingModule} from './teams-routing.module';
import {teamsComponents, teamsServices} from './index';
import {TeamsStoreModule} from './store/teams-store.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {DragAndDropFileUploadModule} from '../../directives/drag-and-drop-file-upload';


@NgModule({
  declarations: [...teamsComponents],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        TeamsStoreModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
        DragAndDropFileUploadModule
    ],
  providers: [...teamsServices]
})
export class TeamsModule { }
