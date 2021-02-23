import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AdminStateModel} from './admin-state.model';
import {User} from '../../core/models/user';
import {
  ResetState,
  SetAdmin,
  SetAdminCreatingIsLoading,
  SetAdminOnEdit,
  SetAdminTabState,
  SetCoachCreatingIsLoading, SetCoachDeletingIsLoading,
  SetCoachTabState
} from './admin.action';
import {AdminTabState} from '../content/admin-content/enums/admin-tab.state.enum';
import {CoachTabState} from '../content/coach-content/enums/coach-tab.state.enum';

const defaultAdminState = (): AdminStateModel => {
  return {
    admin: null,
    adminTabState: AdminTabState.LIST,
    coachTabState: CoachTabState.LIST,
    idOfAdminOnEdit: null,
    adminCreatingIsLoading: false,
    coachCreatingIsLoading: false,
    coachDeletingIsLoading: false
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
  static coachTabState(state: AdminStateModel): CoachTabState {
    return state.coachTabState;
  }

  @Selector()
  static idOfAdminOnEdit(state: AdminStateModel): string {
    return state.idOfAdminOnEdit;
  }

  @Selector()
  static adminCreatingIsLoading(state: AdminStateModel): boolean {
    return state.adminCreatingIsLoading;
  }

  @Selector()
  static coachCreatingIsLoading(state: AdminStateModel): boolean {
    return state.coachCreatingIsLoading;
  }

  @Selector()
  static coachDeletingIsLoading(state: AdminStateModel): boolean {
    return state.coachDeletingIsLoading;
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

  @Action(SetCoachTabState)
  setCoachTabState({patchState}: StateContext<AdminStateModel>, {coachTabState}: SetCoachTabState) {
    patchState({
      coachTabState
    });
  }

  @Action(SetAdminOnEdit)
  setAdminOnEdit({patchState}: StateContext<AdminStateModel>, {idOfAdminOnEdit}: SetAdminOnEdit) {
    patchState({
      idOfAdminOnEdit
    });
  }

  @Action(SetAdminCreatingIsLoading)
  setAdminCreatingIsLoading({patchState}: StateContext<AdminStateModel>, {adminCreatingIsLoading}: SetAdminCreatingIsLoading) {
    patchState({
      adminCreatingIsLoading
    });
  }

  @Action(SetCoachCreatingIsLoading)
  setCoachCreatingIsLoading({patchState}: StateContext<AdminStateModel>, {coachCreatingIsLoading}: SetCoachCreatingIsLoading) {
    patchState({
      coachCreatingIsLoading
    });
  }

  @Action(SetCoachDeletingIsLoading)
  setCoachDeletingIsLoading({patchState}: StateContext<AdminStateModel>, {coachDeletingIsLoading}: SetCoachDeletingIsLoading) {
    patchState({
      coachDeletingIsLoading
    });
  }

  @Action(ResetState)
  resetState({setState}: StateContext<AdminStateModel>) {
    setState(defaultAdminState());
  }

}
