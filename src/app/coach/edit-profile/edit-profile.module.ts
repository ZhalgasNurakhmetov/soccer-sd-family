import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditProfileRoutingModule} from './edit-profile-routing.module';
import {editProfileComponents, editProfileServices} from './index';
import {ReactiveFormsModule} from '@angular/forms';
import {EditProfileStoreModule} from './store/edit-profile-store.module';
import {CoachStoreModule} from '../store/coach-store.module';


@NgModule({
  declarations: [...editProfileComponents],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    ReactiveFormsModule,
    EditProfileStoreModule,
    CoachStoreModule
  ],
  providers: [...editProfileServices]
})
export class EditProfileModule { }
