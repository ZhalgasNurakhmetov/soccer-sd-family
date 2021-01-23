import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {EditProfileState} from './edit-profile.state';
import {NgxsDispatchPluginModule} from '@ngxs-labs/dispatch-decorator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([EditProfileState]),
    NgxsDispatchPluginModule.forRoot()
  ]
})
export class EditProfileStoreModule { }
