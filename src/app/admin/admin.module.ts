import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminStoreModule} from './store/admin.store.module';
import {adminComponents, adminServices} from './index';
import { PlayerContentComponent } from './content/player-content/player-content.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [...adminComponents],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminStoreModule,
    ReactiveFormsModule
  ],
  providers: [...adminServices]
})
export class AdminModule { }
