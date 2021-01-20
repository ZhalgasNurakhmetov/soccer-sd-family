import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';
import {CoachState} from './coach.state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([CoachState]),
    NgxsDispatchPluginModule.forRoot()
  ]
})
export class CoachStoreModule { }
