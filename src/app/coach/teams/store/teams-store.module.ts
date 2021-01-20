import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';
import {TeamsState} from './teams.state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([TeamsState]),
    NgxsDispatchPluginModule.forRoot()
  ]
})
export class TeamsStoreModule { }
