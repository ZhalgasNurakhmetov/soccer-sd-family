import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AdminStateModel} from './admin-state.model';
import {User} from '../../core/models/user';
import {ResetState, SetAdmin, SetAdminOnEdit, SetAdminTabState} from './admin.action';
import {AdminTabState} from '../content/admin-content/enums/admin-tab.state.enum';

const defaultAdminState = (): AdminStateModel => {
  return {
    admin: null,
    adminTabState: AdminTabState.LIST,
    idOfAdminOnEdit: null
  }
}

@State<AdminStateModel>({
  name: 'admin',
  defaults: defaultAdminState()
})
@Injectable()
export class AdminState {

  constructor() {
  }

  @Selector()
  static admin(state: AdminStateModel): User {
    return state.admin;
  }

  @Selector()
  static adminTabState(state: AdminStateModel): AdminTabState {
    return state.adminTabState;
  }

  @Selector()
  static idOfAdminOnEdit(state: AdminStateModel): number {
    return state.idOfAdminOnEdit;
  }

  @Action(SetAdmin)
  setAdmin({patchState}: StateContext<AdminStateModel>, {admin}: SetAdmin) {
    patchState({
      admin
    });
  }

  @Action(SetAdminTabState)
  setAdminTabState({patchState}: StateContext<AdminStateModel>, {adminTabState}: SetAdminTabState) {
    patchState({
      adminTabState
    });
  }

  @Action(SetAdminOnEdit)
  setAdminOnEdit({patchState}: StateContext<AdminStateModel>, {idOfAdminOnEdit}: SetAdminOnEdit) {
    patchState({
      idOfAdminOnEdit
    });
  }

  @Action(ResetState)
  resetState({setState}: StateContext<AdminStateModel>) {
    setState(defaultAdminState());
  }

}
