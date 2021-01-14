import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {AdminState} from './admin.state';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([AdminState]),
    NgxsDispatchPluginModule.forRoot()
  ]
})
export class AdminStoreModule { }
